const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const storyRoutes = require("./routes/storyRoutes");
//express app - instance of express app
const app = express();
const dburi =
  "mongodb+srv://sunilbista:sunil321@node.uza4f.mongodb.net/node-app?retryWrites=true&w=majority&appName=Node";

mongoose
  .connect(dburi)
  .then(() => {
    console.log("Database Connected");
    app.listen(3000, (req, res) => {
      console.log("Listening in port 3000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });
app.set("view engine", "ejs");

//middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //takes all the url encoded data and passed to request object

app.use(morgan("dev"));

app.get("/add-story", (req, res) => {
  const story = new Story({
    title: "A new story 2",
    snippet: "About my story",
    body: "More about my story",
  });
  story
    .save()
    .then((result) => {
      console.log(res.send(result));
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-story", (req, res) => {
  Story.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-story", (req, res) => {
  Story.findById("66e5436ff8eba7212f4ddce7")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  //res.send("<p>Home Page</p>");
  //res.sendFile("./views/index.html", { root: __dirname });
  res.redirect("/story");
  // const story = [
  //   {
  //     title: "A New Day",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Dusk Till Dawn",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "We Are Forever",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // res.render("index", {
  //   title: "Home",
  //   story,
  // });
});

app.get("/about", (req, res) => {
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", {
    title: "About",
  });
});

app.use("/story", storyRoutes);

//404 pages - use is for middleware
app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", {
    title: "Error",
  });
});
