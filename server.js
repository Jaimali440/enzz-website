const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in this folder as static files (index.html, etc.)
app.use(express.static(path.join(__dirname)));

// Fallback: always serve index.html (handy if you add routes later)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
