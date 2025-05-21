
// backend/db.js
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'CDAC2025@S',
  database: process.env.DB_NAME || 'interiordesign'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.stack);
    process.exit(1); // Stop server if DB fails
  } else {
    console.log('✅ Connected to database');
  }
});

export default db;
