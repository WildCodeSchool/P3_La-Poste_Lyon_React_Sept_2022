const models = require("../models");

// check if the email and the password are the same than the database
const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  models.user
    .findByEmailWithPassword(email)
    .then(([users]) => {
      if (users[0] != null) {
        [req.user] = users;

        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch(() => {
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
};
