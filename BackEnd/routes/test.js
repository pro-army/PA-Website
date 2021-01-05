const express = require("express");
const router = express.Router();

const testController = require("../controllers/test");
const auth = require('../controllers/auth');

// With Auth Middleware
router.post('/all', auth.withmiddleware, test.function1)

// Without Middleware
router.post('/login', test.function2);


module.exports = router;