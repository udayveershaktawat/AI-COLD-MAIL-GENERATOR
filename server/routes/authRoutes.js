const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");


// register
router.post("/register",authController.register);
// login
router.post("/login",authController.login);
// verify OTP
router.post("/verify-otp",authController.verifyOTP)
 
module.exports = router