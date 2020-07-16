const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require('bcryptjs');

router.get('/init', async (req, res) => {
    const token = req.query.token;
    let response;
    let user = null;

    try {
        const userData = jwt.verify(token, 'app');
        userId = userData.userId;
        user = await User.findById(userData.userId);
    } catch (e) {
        response = null;
    }

    if (user) {
        response = user;
    }
    res.send({user: response});
});

router.post('/register', async (req, res) => {
    const user = await User.find({email: req.body.email});
    console.log(user);
    if (user._id) {
        return res.status(400).send({
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

    return res.sendStatus(201);
});

router.post('/login', async (req, res) => {
    const user = await User.find({email: req.body.email});
    if (!user) {
        return res.status(400).send({
            message: 'User with this email does not exist'
        });
    }

    const passwordIsEqual = await bcrypt.compare(req.body.password, user.password);
    if(!passwordIsEqual) {
        return res.status(401).send({
            message: 'Password was incorrect'
        })
    }

    const token = jwt.sign({userId: user._id}, 'app');

    res.send({
        user,
        token
    })

})

module.exports = router;