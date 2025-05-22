const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const localQuotes = require('./quote');

dotenv.config(); // Load .env
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Quote API!');
});

app.get('/quote', async (req, res) => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    res.json({
      quote: response.data.content,
      author: response.data.author
    });
  } catch (error) {
    // fallback to local quotes
    const random = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    res.json(random);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 