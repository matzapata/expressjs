const express = require("express");

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.get("/", async (req, res) => {
  res.json({ Hello: "World" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
