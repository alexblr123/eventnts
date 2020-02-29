const users = require("./logins.json");

const loginController = (req, res, next) => {
  const foundedUser = users.find(
    user =>
      user.username === req.body.username && user.password === req.body.password
  );

  if (foundedUser) {
    return res.json(foundedUser);
  }

  return res
    .status(401)
    .json({ message: "invalid password or username", status: 401 });
};

module.exports = {
  loginController
};
