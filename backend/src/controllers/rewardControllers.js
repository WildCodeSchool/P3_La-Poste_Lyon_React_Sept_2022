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

const AddRewardToUser = (req, res) => {
  const raw = req.body;

  models.reward
    .post(raw)
    .then(([result]) => {
      res.location(`/reward/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { getAllBadgeByUser, AddRewardToUser };
