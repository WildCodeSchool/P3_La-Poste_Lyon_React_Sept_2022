const models = require("../models");

// browse all tuto by user id
const browseAllTutoByUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  models.tutorialStatus
    .findAllStatusByUserId(userId)
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
  models.tutorialStatus
    .findAllFinishedTuto(userId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postToStart = (req, res) => {
  const raw = req.body;

  models.tutorialStatus
    .postToStarted(raw)
    .then(([result]) => {
      res.location(`/tutoStatus/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateToFinished = (req, res) => {
  const raw = req.body;

  models.tutorialStatus
    .updateToFinished(raw)
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

const addTutoStatus = (req, res) => {
  const tuto = req.body;
  models.tutorialStatus
    .addTutoStatus(tuto)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteStatusByUser = (req, res) => {
  const userId = req.params.id;
  models.tutorialStatus
    .deleteAllTutoByUser(userId)
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
  postToStart,
  updateToFinished,
  addTutoStatus,
  deleteStatusByUser,
};
