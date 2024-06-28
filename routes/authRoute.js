const express = require('express');
const router = express.Router();
const { registerController,loginController } = require('../controllers/authController.js'); // Use require instead of import

router.post('/register', registerController);

//LOGIN POST
router.post('/login',loginController);

module.exports = router;
