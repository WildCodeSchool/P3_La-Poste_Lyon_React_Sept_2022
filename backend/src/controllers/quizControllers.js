const models = require("../models");

const browseAllQuiz = (req, res) => {
  models.quiz
    .findAllQuiz()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseEverythingInQuiz = (req, res) => {
  const quizId = req.params.id;
  models.quiz
    .getAllFromQuiz(quizId)
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

module.exports = { browseAllQuiz, browseEverythingInQuiz };
