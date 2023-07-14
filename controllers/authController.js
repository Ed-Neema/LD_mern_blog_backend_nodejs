const User = require("../models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

//@desc Register a user
//@route POST /api/auth/register
//@access public
const registerUser = asyncHandler(async (req, res) => {

  const { email, password, username } = req.body;
  // check if all fields are entered
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All Fields are mandatory");
  }
  // check if email address already exists
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists");
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log("User created: ", user);
  // if user created
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("Error creating user. Try Again");
  }
});

//@desc Login a user
//@route POST /api/auth/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    
     const { username, password } = req.body;
     if (!username || !password) {
       res.status(400);
       throw new Error("All fields mandatory");
     }

     // chech if user exists in db
     const user = await User.findOne({ username });
    
     // compare passwords
     if (user && (await bcrypt.compare(password, user.password))) {
       const accessToken = jwt.sign(
         {
           // payload
           user: {
             username: user.username,
             email: user.email,
             id: user.id,
             profilePic: user.profilePic
           },
         },
         //   secret
         process.env.ACCESS_TOKEN_SECRET,
         //   expiration date
         { expiresIn: "1h" }
       );
       res.status(200).json({ accessToken , });
     } else {
       res.status(401);
       throw new Error("Email or Password invalid ");
     }

});

module.exports = { registerUser, loginUser };

