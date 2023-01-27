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
      res.send(rows);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { browseAllQuiz, browseEverythingInQuiz };
