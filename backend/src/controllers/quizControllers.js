const models = require("../models");

const browseAllQuiz = (req, res) => {
  models.quiz
    .findAllQuiz()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch(() => {
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
        // select ${this.table}.id, ${this.table}.title, ${this.table}.icon, question.id, question.question, response.content, response.isCorrect from ${this.table} join question on ${this.table}.id = question.quiz_id join response on question.id = response.question_id where ${this.table}.id = ?`,
        const quiz = {
          id: rows[0].id,
          title: rows[0].title,
          icon: rows[0].icon,
          questions: [],
        };

        rows.forEach((row) => {
          // On cherche si la question existe déjà dans le tableau
          let question = quiz.questions.find(
            (element) => element.id === row.question_id
          );
          // si elle n'existe pas, on la crée
          if (question === undefined) {
            question = {
              id: row.question_id,
              question: row.question,
              responses: [],
            };
            quiz.questions.push(question);
          }
          // On ajoute la réponse à la question
          const response = {
            id: row.response_id,
            content: row.content,
            isCorrect: row.isCorrect,
          };
          question.responses.push(response);
        });
        res.send(quiz);
      }
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

module.exports = { browseAllQuiz, browseEverythingInQuiz };
