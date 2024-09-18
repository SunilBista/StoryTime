const express = require("express");
const router = express.Router(); //new instance of router object - small router
const storyController = require("../controllers/storyController");

const {
  story_list,
  story_details,
  story_create_get,
  story_create_post,
  story_delete,
} = storyController;

router.get("/create", story_create_get);
router.get("/", story_list);
router.post("/", story_create_post);
router.get("/:id", story_details);
router.delete("/:id", story_delete);

module.exports = router;
