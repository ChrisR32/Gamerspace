const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require('bcryptjs');

router.get('/init', async (req, res) => {
    const token = req.query.token;
    let response;
    let userId = null;

    try {
        const userData = jwt.verify(token, secretOrPrivateKey:'app');
        userId = userData.userId;
    } catch (e) {
        response = null;
    }

    if (userId) {
        response = await User.findById(userId);
    }
    res.send(data:{user: response});
});

router.post('/register', async (req, res) => {
    const userExists = await User.find({email: req.body.email});
    if (!userExists) {
        return res.status(400).send(data:{
            message: 'A user with this email does already exists'
        });
    }

    const newUser = User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: 'user'
    });

    await newUser.save();

    return res.sendStatus(statusCode:201);
});

router.post('/login', async (req, res) => {
    const user = await User.find({email: req.body.email});
    if (!user) {
        return res.status(400).send(data:{
            message: 'User with this email does not exist'
        });
    }

    const passwordIsEqual = await bcrypt.compare(req.body.password, user.password);
    if(!passwordIsEqual) {
        return res.status(401).send(data:{
            message: 'Password was incorrect'
        })
    }

    const token = jwt.sign(payload{userId: user._id}, secretOrPrivateKey:'app');

    res.send(data:{
        user,
        token
    })

})

module.exports = router;