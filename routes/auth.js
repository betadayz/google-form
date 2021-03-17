const express = require('express');
const router = express.Router();

const { postData, 
        signin, 
        signout } = require('../controllers/auth');
const { userValidator } = require('../validator');

router.post("/user", userValidator, postData);
//router.post("/signin", signin);
//router.get("/signout", signout);

module.exports = router;