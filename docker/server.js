const express = require('express');
const app = express();
const PORT = 3000;

// Access the environment variable defined in your Dockerfile
const name = process.env.name || 'User';

app.get('/', (req, res) => {
  res.send(`Hello ${name}! Your Node.js server is running smoothly inside Docker.`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
