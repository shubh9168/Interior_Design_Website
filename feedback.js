// backend/routes/feedback.js
import express from 'express';
import db from '../db.js';
import authenticateToken from '../middleware/authMiddleware.js';

const router = express.Router();

// CREATE feedback
router.post('/', (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;
  const sql = 'INSERT INTO feedbacks (name, email, message) VALUES (?, ?, ?)';

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting feedback:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.status(201).json({ message: 'Feedback submitted successfully' });
  });
});

// READ all feedbacks
router.get('/', (req, res) => {
  db.query('SELECT * FROM feedbacks', (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    res.json(results);
  });
});

// DELETE feedback by ID (Fixed table name and route)
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM feedbacks WHERE id = ?';

  db.query(sql, [id], (err) => {
    if (err) {
      console.error('Error deleting feedback:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json({ message: 'Feedback deleted successfully' });
  });
});
router.put('/feedbacks/:id', authenticateToken, (req, res) => {
  const { name, email, message } = req.body;
  const { id } = req.params;

  const sql = 'UPDATE feedback SET name = ?, email = ?, message = ? WHERE id = ?';
  db.query(sql, [name, email, message, id], (err, result) => {
    if (err) {
      console.error('Error updating feedback:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Feedback not found' });
    }

    res.json({ message: 'Feedback updated successfully' });
  });
});

export default router;
