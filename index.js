import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/non-blocking', (req, res) => {
  res.send('This is a non-blocking endpoint');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
