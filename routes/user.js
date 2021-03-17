const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const { createUser, getAllUsers, readUsers} = require('../controllers/user');

router.get("/secret/:userId", (req, res) => {
    res.json({
        user: req.profile
    });
});

router.get("/users", getAllUsers);
router.get('/users/:user', readUsers);

router.post('/users', createUser);
//router.put('/user/:userId', requireSignin, isAuth, update)

// router.param('userId', userById)

module.exports = router;









// const express = require("express");
// const router = express.Router();

// const { postData } = require("../controllers/user")
// router.post("/user", postData)

// module.exports = router;