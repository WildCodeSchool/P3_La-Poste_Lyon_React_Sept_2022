const models = require("../models");

// browse all tuto by user id
const browseAllTutoByUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  models.historical
    .findAllByUserId(userId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// browse all unstarted tutos by user id
const browseUnstartedTutoByUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  models.historical
    .findAllUnstartedTuto(userId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// browse all started tutos by user id
const browseStartedTutoByUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  models.historical
    .findAllUnstartedTuto(userId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// browse all finished tutos by user id
const browseFinisheddTutoByUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  models.historical
    .findAllUnstartedTuto(userId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateToStart = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.tutorialStatus
    .updateToStart(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateToFinished = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.tutorialStatus
    .updateToStart(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browseAllTutoByUser,
  browseUnstartedTutoByUser,
  browseStartedTutoByUser,
  browseFinisheddTutoByUser,
  updateToStart,
  updateToFinished,
};
