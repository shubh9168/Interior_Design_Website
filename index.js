import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import feedbackRoutes from './routes/feedback.js';
import adminRoutes from './routes/admin.js';
import contactRoutes from './routes/contact.js';
dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/contact', contactRoutes);
// Root route
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
