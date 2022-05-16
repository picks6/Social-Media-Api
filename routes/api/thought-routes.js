const router = require("express").Router();

const {
  getAllThoughts,
  createThought,
  updateThought,
  deleteThought,
  getThoughtById,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// assign get all and post
router.route("/").get(getAllThoughts).post(createThought);

// Assign get one, put one, delete one
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

//assign reaction post/delete routes
router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;
