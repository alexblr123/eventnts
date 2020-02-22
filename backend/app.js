const express = require("express");

const app = express();
const port = 3001;
const routes = require("./routes");
const loginRoutes = require("./modules/login/routes");

app.use(express.bodyParser());
app.use(express.cookieParser());

app.use("/", routes);
app.use("/login", loginRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//https://expressjs.com/ru/starter/generator.html//
