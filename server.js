const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("config");
const app = express();

//express middleware//
app.use(express.json());

//db config//
// const db = require("./config/db").mongoURI;
const db =
  process.env.NODE_ENV === "production"
    ? process.env.MongoURI
    : config.get("MongoURI");

//connect to mongo//
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//anything that goes to route refers to items variable
app.use("/api/items", require("./routes/API/Items"));
app.use("/api/users", require("./routes/API/Users"));
app.use("/api/auth", require("./routes/API/Auth"));

//server static assets(aka build folder) if in production
if (process.env.NODE_ENV === "production") {
  //set static folder//
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client/build/index.html"));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
