const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const router = express.Router();


//REGISTER
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);



// LOGIN


module.exports = router;