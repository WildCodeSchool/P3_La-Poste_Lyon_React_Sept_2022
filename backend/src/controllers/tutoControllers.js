const models = require("../models");

// get all tutos by category and return every tutos  with is id
const browse = (req, res) => {
  models.tuto
    .findAllByCategory(req.params.id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// get all tutos by category and return every tutos  with is id
const browseAll = (req, res) => {
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
      if (tuto.steps?.length > 0) {
        models.stepper
          .insertAll(tuto.steps, result.insertId)
          .then(res.location(`/tutos/${result.insertId}`).sendStatus(201))
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      } else res.location(`/tutos/${result.insertId}`).sendStatus(201);
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

module.exports = {
  browse,
  browseAll,
  read,
  edit,
  add,
  destroy,
};
