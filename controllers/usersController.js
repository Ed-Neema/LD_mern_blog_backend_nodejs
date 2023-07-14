const User = require("../models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");


//@desc Update a user
//@route POST /api/auth/register
//@access public
const updateUser = asyncHandler(async (req, res) => {

 
});

//@desc Delete a user
//@route POST /api/auth/register
//@access public
const deleteUser = asyncHandler(async (req, res) => {

 
});


//@desc Delete a user
//@route POST /api/auth/register
//@access public
const getUser = asyncHandler(async (req, res) => {

 
});

module.exports = { getUser, deleteUser, updateUser };