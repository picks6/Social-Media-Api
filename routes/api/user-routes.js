const router = require("express").Router();

const {
  getAllUsers,
  createUser,
  deleteUser,
  getUserById,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// Assign get all and post route
router.route("/").get(getAllUsers).post(createUser);

// Assign get one, update one, and delete one
router.route("/:id").get(getUserById).delete(deleteUser);

// Assign post and delete friend routes
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;
