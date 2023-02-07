const models = require("../models");

// get all users
const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

// get user by its id
const read = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

// add an user
const add = (req, res) => {
  const user = req.body;
  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/api/users/${result.insertId}`).sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

// edit an user
const edit = (req, res) => {
  const user = req.body;

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

// delete an user
const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

const updateAvatar = (req, res) => {
  const id = req.payload.sub;
  const { avatar } = req;

  models.user
    .updateAvatar(id, avatar)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.status(202).send({ avatar });
    })
    .catch(() => {
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
