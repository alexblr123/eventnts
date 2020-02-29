const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;
const routes = require("./routes");
const loginRoutes = require("./modules/login/routes");

app.use(cors());
app.use(bodyParser.json());

app.use("/", routes);
app.use("/login", loginRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
