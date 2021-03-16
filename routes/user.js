const express = require("express");
const router = express.Router();

const { form } = require("../controllers/user")
router.get("/docs.google.com/forms/d/e/1FAIpQLScaucdG2KYhtV3IhaK39JG7onyXHmvW0HiazmKFBvrNdu351A/viewform",form)

module.exports = router;