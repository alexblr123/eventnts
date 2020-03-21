const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const db = mongoose.connection;

const app = express();
const port = 3001;
const loginRoutes = require("./modules/login/routes");

app.use(cors());
app.use(express.json());

app.use("/login", loginRoutes);

mongoose.connect(
  "mongodb+srv://karotysh2:Iamlexa672@firstcluster-9hxot.gcp.mongodb.net/EventList?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

db.once("open", () => {
  console.log("DB CONNECTED");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
