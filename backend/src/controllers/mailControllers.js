require("dotenv").config();
const nodemailer = require("nodemailer");

const { FRONTEND_URL } = process.env;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendForgottenPassword = (req, res) => {
  transporter.sendMail(
    {
      from: "chloebidau@hotmail.fr",
      to: req.user.email,
      subject: "Mot de passe oublié",
      text: "Pour créer un nouveau mot de passe, cliquez ici !",
      html: `<p>Pour créer un nouveau mot de passe, <a href="${FRONTEND_URL}/resetpassword/${req.passwordToken}">cliquez ici !</a></p>`,
    },
    (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else res.sendStatus(200);
    }
  );
};

module.exports = { sendForgottenPassword };
