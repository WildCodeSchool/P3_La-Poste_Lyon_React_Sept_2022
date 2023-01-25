const models = require("../models");

const getAllBadgeByUser = (req, res) => {
  models.reward
    .find(req.params.id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { getAllBadgeByUser };
