const express = require("express");
const app = express();
require("./DB/conn");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Rujay Testing")
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})

