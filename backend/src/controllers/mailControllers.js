require("dotenv").config();
const nodemailer = require("nodemailer");

const { FRONTEND_URL } = process.env;
const { SMTP_USER } = process.env;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: `${SMTP_USER}`,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendForgottenPassword = (req, res) => {
  transporter.sendMail(
    {
      from: SMTP_USER,
      to: req.user.email,
      subject: "Mot de passe oublié",
      text: "Pour créer un nouveau mot de passe, cliquez ici !",
      html: `<p>Pour créer un nouveau mot de passe, <a href="${FRONTEND_URL}/resetpassword/${req.user.passwordToken}">cliquez ici !</a></p>`,
    },
    (err) => {
      if (err) {
        res.sendStatus(500);
      } else res.sendStatus(200);
    }
  );
};

const sendForgottenEmail = (req, res) => {
  transporter.sendMail(
    {
      from: SMTP_USER,
      to: req.user.email,
      subject: "Email oublié",
      text: "Si vous recevez ce mail, c'est qu'il s'agit de la bonne adresse mail !",
      html: `<p>L'adresse mail utilisée pour vous connecter à votre compte La Ligne Bleue est celle-ci : ${req.user.email}</a></p>`,
    },
    (err) => {
      if (err) {
        res.sendStatus(500);
      } else res.sendStatus(200);
    }
  );
};

module.exports = { sendForgottenPassword, sendForgottenEmail };
