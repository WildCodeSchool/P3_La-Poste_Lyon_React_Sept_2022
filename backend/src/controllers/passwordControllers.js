// Ajout de uuid
const { v4: uuidv4 } = require("uuid");
const models = require("../models");

// Verify if the email exist on the database (link with a user), if it is not the case, we send nothing because it would be a security fail
const verifyEmail = (req, res, next) => {
  const { email } = req.body;

  models.user
    .findByEmailWithPassword(email)
    .then(([users]) => {
      if (users[0] != null) {
        // eslint-disable-next-line prefer-destructuring
        req.user = users[0];

        next();
      } else {
        res.sendStatus(200);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

// je génère mon token grace à uuidv4
// j'enregistre le token dans ma BDD et je l'associe avec le user (update user en ajoutant cette valeur dans le champ concerné update table machin where user.id = ?) dans le passwordManager
// je transmet le token au prochain middleware
const generatePasswordToken = (req, res, next) => {
  const { user } = req;
  user.passwordToken = uuidv4();

  models.user
    .updatePasswordToken(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Create a new password
const resetPassword = (req, res) => {
  const user = req.body;

  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  verifyEmail,
  generatePasswordToken,
  resetPassword,
};
