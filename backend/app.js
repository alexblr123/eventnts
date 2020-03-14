const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const db = mongoose.connection;

const app = express();
const port = 3001;
const loginRoutes = require("./modules/login/routes");

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model("Users", userSchema);

User.find((err, users) => {
  if (err) return console.error(err);
  console.log(users);
});

app.use(cors());
app.use(bodyParser.json());

app.use("/login", loginRoutes);

mongoose.connect(
  "mongodb+srv://karotysh2:Iamlexa672@firstcluster-9hxot.gcp.mongodb.net/EventList?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

db.once("open", () => {
  console.log("DB CONNECTED");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
