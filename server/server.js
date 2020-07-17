const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const config = require('./config');

mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "client/build")));

app.use('/api/auth', require("./controllers/Auth"));
app.use('/api/forum', require("./controllers/Forum"));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client/build/index.html"));
});

const PORT = 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));