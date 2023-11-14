const mongodb = require("mongodb");

const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.status(200).send("ok");
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("listening at the port 3000");
})