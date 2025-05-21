import express from 'express';
import db from '../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import authenticateToken from '../middleware/authMiddleware.js';

const router = express.Router();

// REGISTER
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, hashed], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Email already exists' });
        }
        return res.status(500).json({ message: 'Server error' });
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

// LOGIN
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';

  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = results[0];
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(401).json({ message: 'Invalid email or password' });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'secret-key',
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Login successful', token, user });
  });
});

// GET all users (protected)
router.get('/users', authenticateToken, (req, res) => {
  db.query('SELECT id, name, email FROM users', (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    res.json(results);
  });
});

// UPDATE user (protected)
router.put('/users/:id', authenticateToken, (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';

  db.query(sql, [name, email, id], (err) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    res.json({ message: 'User updated successfully' });
  });
});

// DELETE user (protected)
router.delete('/users/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    res.json({ message: 'User deleted successfully' });
  });
});

export default router;
