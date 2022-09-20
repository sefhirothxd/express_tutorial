const express = require("express");
const app = express();

app.use(express.json());

app.post("/suma", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});
app.post("/resta", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a - b });
});
app.post("/multiplicar", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a * b });
});
app.post("/dividir", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a / b });
});
port = process.env.PORT || 3000;

app.listen(3000);
console.log("Server on port ", port);
