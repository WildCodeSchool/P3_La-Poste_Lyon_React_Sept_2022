/* eslint-disable */
const mailer = require("./mailer");

const FRONTEND_URL = process.env.FRONTEND_URL;

mailer.sendMail(
  {
    from: "chloebidau@hotmail.fr",
    to: req.user.email,
    subject: "Mot de passe oublié",
    text: "Pour créer un nouveau mot de passe, cliquez ici !",
    html: `<p>Pour créer un nouveau mot de passe, <a href="${FRONTEND_URL}/reviewpassword/${req.passwordToken}">cliquez ici !</a></p>`,
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);
