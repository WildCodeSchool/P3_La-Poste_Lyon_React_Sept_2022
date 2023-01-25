const models = require("../models");

// get all steppers
const browse = (req, res) => {
  models.stepper
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// get steppers by its id - to edit to get steppers by tuto_id
const read = (req, res) => {
  models.stepper
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// edit a stepper
const edit = (req, res) => {
  const stepper = req.body;

  stepper.tuto_id = parseInt(req.params.tuto_id, 10);

  models.stepper
    .update(stepper)
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

// add a stepper
const add = (req, res) => {
  const stepper = req.body;

  models.stepper
    .insert(stepper)
    .then(([result]) => {
      res.location(`/steppers/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

/* delete all steps of  the stepper associate to the tutoID  */
const destroy = (req, res) => {
  models.stepper
    .deleteAll(req.params.id)
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
  read,
  edit,
  add,
  destroy,
};
