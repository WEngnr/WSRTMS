const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = 5000;

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Xerox@123',
  port: 5432,
});

app.use(cors());
app.use(express.json());

app.post('/api/tickets', async (req, res) => {
  const { name, contact, product, issue } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO tickets (name, contact, product, issue) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, contact, product, issue]
    );
    console.log('Ticket saved:', result.rows[0]);
    res.status(200).json({ message: 'Ticket saved successfully' });
  } catch (error) {
    console.error('Error saving ticket:', error);
    res.status(500).json({ error: 'Failed to save ticket' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
