require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
// const API_KEY = process.env.API_KEY;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to your Express server!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
