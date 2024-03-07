import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

app.get("/fibonacci/:n", (req, res) => {
  const n = parseInt(req.params.n);
  if (isNaN(n) || n < 0) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  const result = fibonacci(n);
  res.json({ fibonacci: result });
});

app.get("/non-blocking", (req, res) => {
  res.send("This is a non-blocking endpoint");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
