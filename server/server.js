const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const router = express.Router();
const config = require('./config');
const { db } = require("./models/User");
const Forum = require('./models/Forum');
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
app.use('/api/category', require("./controllers/Category"));
app.use('/api/forum', require("./controllers/Forum"));
app.use('/api/thread', require("./controllers/Thread"));
app.use('/api/post', require("./controllers/Post"));

app.get('/toppost', function topPosts(req, res) {
    let topPost = db.collection('threads').findOne(
        {},
        { sort: { datetime: -1 } },
        (err, data) => {
        console.log(data);
        res.send(data);
        },
    )
});

app.get('/topreply', function topPosts(req, res) {
    let topPost = db.collection('posts').findOne(
        {},
        { sort: { datetime: -1 } },
        (err, data) => {
        console.log(data);
        res.send(data);
        },
    )
});

app.get('/totalthreads', function total(req, res) { 
    db.collection('threads').countDocuments( {}, function(err, result){
        if(err){
            res.send(err)
        }
        else{
            res.json(result)
        }
   })
});

app.get('/totalposts', function total(req, res) { 
    db.collection('posts').countDocuments( {}, function(err, result){
        if(err){
            res.send(err)
        }
        else{
            res.json(result)
        }
   })
});

app.get('/totalusers', function total(req, res) { 
    db.collection('users').countDocuments( {}, function(err, result){
        if(err){
            res.send(err)
        }
        else{
            res.json(result)
        }
   })
});

router.get('/totalinthreads/', async (req, res) => {
    const forum = await Forum.countDocuments(req.params.id);
    if (!forum) {
        res.status(404).send({
            message: 'Forum not found'
        });
        return;
    }
 
    res.send(forum);
 });


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client/build/index.html"));
});

const PORT = 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));