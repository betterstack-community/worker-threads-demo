import express from "express";
import workerpool from "workerpool";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

const pool = workerpool.pool(__dirname + "/fibonacci-worker.js", {
  maxWorkers: 4,
});
app.get("/fibonacci/:n", async (req, res) => {
  const n = parseInt(req.params.n);
  if (isNaN(n) || n < 0) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }
  try {
    const result = await pool.exec("fibonacci", [n]);
    res.json({ fibonacci: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/non-blocking", (req, res) => {
  res.send("This is a non-blocking endpoint");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
