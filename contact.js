import express from 'express';
import db from '../db.js';
import authenticateToken from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /api/contact - Save contact message
router.post('/', (req, res) => {
  
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err) => {
    if (err) {
      console.error('Error saving contact message:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.status(201).json({ message: 'Message sent successfully!' });
  });
});
router.put('/contacts/:id', authenticateToken, (req, res) => {
  const { name, email, message } = req.body;
  const { id } = req.params;

  const sql = 'UPDATE contact SET name = ?, email = ?, message = ? WHERE id = ?';
  db.query(sql, [name, email, message, id], (err, result) => {
    if (err) {
      console.error('Error updating contact message:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Contact message not found' });
    }

    res.json({ message: 'Contact message updated successfully' });
  });
});



export default router;
