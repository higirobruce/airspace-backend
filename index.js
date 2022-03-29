require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const operatorsRoute = require("./routes/operators");
const aircraftsRoute = require("./routes/aircrafts");
const permitsRoute = require("./routes/permits");
const uploadRoute = require("./routes/upload");
const usersRoute = require("./routes/users");

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(__dirname + "/public"));
const { AIRSPACE_DB_USER, AIRSPACE_DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } =
  process.env;
// mongoose
//   .connect(
//     `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
//   )
//   .then(() => {
//     console.log("connected to DB");
//   });

mongoose
  .connect(
    `mongodb+srv://${AIRSPACE_DB_USER}:${AIRSPACE_DB_PASSWORD}@myfreecluster.kxvgw.mongodb.net/air-space?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to DB");
  });

const db = mongoose.connection;

db.on("error", (error) => {});
db.once("open", () => {});

app.use("/operators/", operatorsRoute);
app.use("/aircrafts/", aircraftsRoute);
app.use("/permits/", permitsRoute);
app.use("/upload", uploadRoute);
app.use("/users/", usersRoute);

app.get("/file/:folder/:name", function (req, res, next) {
  var folder = req.params.folder;
  var options = {
    root: path.join(__dirname, "public/", folder),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next("File not found! 😏");
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.listen(3000, () => {});
