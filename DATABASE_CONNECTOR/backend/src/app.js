const { connectDB } = require("../DB/Conn");

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

connectDB();
app.get("/", (req, res) => {
  res.send("Rujay Testing");
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
