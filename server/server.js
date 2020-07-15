const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(bodyParser.json);

app.use(express.static(path.join(__dirname, "..", "client/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client/build/index.html"));
})

app.listen(5000, () => console.log('Server started on port 5000'));