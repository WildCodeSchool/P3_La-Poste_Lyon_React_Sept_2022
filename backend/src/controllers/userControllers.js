const models = require("../models");

// get all tutos
const browse = (req, res) => {
  models.tuto
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// get a tuto with its id
const read = (req, res) => {
  models.tuto
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// edit a tuto
const edit = (req, res) => {
  const tuto = req.body;

  tuto.id = parseInt(req.params.id, 10);

  models.tuto
    .update(tuto)
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

// add a tuto
const add = (req, res) => {
  const tuto = req.body;

  models.tuto
    .insert(tuto)
    .then(([result]) => {
      res.location(`/tutos/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// delete a tuto
const destroy = (req, res) => {
  models.tuto
    .delete(req.params.id)
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

const updateAvatar = (req, res) => {
  const id = req.payload.sub;
  const { profilePicture } = req;

  models.user
    .updateAvatar(id, profilePicture)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.status(202).send({ profilePicture });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  updateAvatar,
};
