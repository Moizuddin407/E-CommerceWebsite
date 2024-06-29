// This file provides extensions of routes e.g. register and login function
// Are called from authController.js
// Similarly you can add a file with more uses and can ads such routes.
const express = require('express');
const router = express.Router();
const {requireSignIn, isAdmin} = require('../middlewares/authMiddleware.js');
const { registerController,loginController,testController } = require('../controllers/authController.js'); // Use require instead of import

router.post('/register', registerController);
//LOGIN POST
router.post('/login',loginController);

router.get('/test',requireSignIn,isAdmin,testController),

module.exports = router;
