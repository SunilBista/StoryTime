// story_list, story_details, story_create, story_create_post, story_delete
const Story = require("../models/story");

const story_list = (req, res) => {
  Story.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("story/index", {
        title: "Story",
        story: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const story_details = (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  Story.findById(id)
    .then((result) => {
      res.render("story/details", { story: result, title: "Story Detail" });
    })
    .catch((err) => {
      console.log("error", err);
      res.status(404).render('404', { title: 'Not found'})
    });
};

const story_create_get = (req, res) => {
  res.render("story/create", {
    title: "New Story",
  });
};

const story_create_post = (req, res) => {
  const story = new Story(req.body);
  story
    .save()
    .then((result) => {
      res.redirect("/story");
    })
    .catch((err) => {
      console.log("error", err);
    });
};

const story_delete = (req, res) => {
  const id = req.params.id;
  Story.findByIdAndDelete(id)
    .then((result) => {
      res.json({
        redirect: "/story",
      });
    })
    .catch((err) => {
      console.log("Error", err);
    });
};
module.exports = {
  story_list,
  story_details,
  story_create_get,
  story_create_post,
  story_delete,
};
