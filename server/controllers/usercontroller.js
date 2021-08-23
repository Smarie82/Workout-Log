const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

router.post('/register', function (req, res) {

    User.create({
        username: req.body.user.username,
        passwordhash: bcrypt.hashSync(req.body.user.passwordhash, 15)
    })
    .then(
        function createSuccess(user) {
            let token = jwt.sign({ id: user.id, user: user.username}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
            res.json({
                user: user,
                message: 'You are Registered!',
                sessionToken: token
            });
        }
    )
    .catch(err => res.status(500).json({ error: err}))
});

router.post('/login', function(req, res) {
    User.findOne({
        where: {
<<<<<<< HEAD
            username: req.body.user.username
=======
            user: req.body.user.username
>>>>>>> 30605ddb2e9055c2dab0b0ce9f1afd83e7bd64f5
        }
    })
    .then(function loginSuccess(user) {
        if (user) {
            bcrypt.compare(req.body.user.passwordhash, user.passwordhash, function (err, matches){
                if (matches) {

            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24})

        res.status(200).json({
            user: user,
            message: "You are logged in!",
            sessionToken: token
        })
    } else {
        res.status(500).json({ error: 'Not a USER!'})
    }
    });
   } else {
       res.status(500).json({ error: 'You do not exist!'})
      }    
    })
    .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;