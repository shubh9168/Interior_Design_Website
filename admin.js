import express from 'express';
import db from '../db.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// JWT Middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET || 'secret-key', (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
};

// ========== USERS ==========

// GET all users
router.get('/users', verifyToken, (req, res) => {
  db.query('SELECT id, name, email FROM users', (err, result) => {
    if (err) return res.status(500).json({ message: 'Error fetching users' });
    res.json(result);
  });
});

// DELETE user by ID
router.delete('/users/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ message: 'Error deleting user' });
    res.json({ message: 'User deleted successfully' });
  });
});

// ========== FEEDBACK ==========

// GET all feedback
router.get('/feedback', verifyToken, (req, res) => {
  db.query('SELECT * FROM feedbacks', (err, result) => {
    if (err) return res.status(500).json({ message: 'Error fetching feedbacks' });
    res.json(result);
  });
});

// DELETE feedback by ID
router.delete('/feedback/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM feedbacks WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ message: 'Error deleting feedback' });
    res.json({ message: 'Feedback deleted successfully' });
  });
});

// UPDATE feedback by ID
router.put('/feedback/:id', verifyToken, (req, res) => {
  const { name, email, message } = req.body;
  db.query(
    'UPDATE feedbacks SET name = ?, email = ?, message = ? WHERE id = ?',
    [name, email, message, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ message: 'Error updating feedback' });
      res.json({ message: 'Feedback updated successfully' });
    }
  );
});

// ========== CONTACT ==========

// GET all contact messages
router.get('/contact', verifyToken, (req, res) => {
  db.query('SELECT * FROM contacts', (err, result) => {
    if (err) return res.status(500).json({ message: 'Error fetching contacts' });
    res.json(result);
  });
});

// DELETE contact by ID
router.delete('/contact/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM contacts WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ message: 'Error deleting contact' });
    res.json({ message: 'Contact deleted successfully' });
  });
});

// UPDATE contact by ID
router.put('/contact/:id', verifyToken, (req, res) => {
  const { name, email, message } = req.body;
  db.query(
    'UPDATE contacts SET name = ?, email = ?, message = ? WHERE id = ?',
    [name, email, message, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ message: 'Error updating contact' });
      res.json({ message: 'Contact updated successfully' });
    }
  );
});

export default router;
