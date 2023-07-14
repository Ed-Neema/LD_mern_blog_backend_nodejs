const express = require("express");
const {updateUser, deleteUser, getUser} = require("../controllers/usersController");
const router = express.Router();

//Get, Update & Delete
router.route("/:id").put(updateUser).delete(deleteUser).get(getUser);
// router.route("/login").post(loginUser);

// LOGIN

module.exports = router;
