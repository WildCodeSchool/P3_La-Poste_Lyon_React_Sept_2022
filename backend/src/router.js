const express = require("express");

// Ajout de multer
const multer = require("multer");

const router = express.Router();

// On définit la destination de stockage de nos fichiers
// const upload = multer({ dest: process.env.AVATAR_DIRECTORY });
// On définit la destination de stockage de nos fichiers
const upload = multer({ dest: "public/uploads/" });

const { hashPassword, verifyPassword, verifyToken } = require("./views/auth");

const userControllers = require("./controllers/userControllers");
const authentificationControllers = require("./controllers/authentificatorControllers");
const categoryControllers = require("./controllers/categoryControllers");
const tutoControllers = require("./controllers/tutoControllers");
const stepperControllers = require("./controllers/stepperControllers");
const tutorialStatusControllers = require("./controllers/tutorialStatusControllers");
const passwordControllers = require("./controllers/passwordControllers");
const mailControllers = require("./controllers/mailControllers");
const fileControllers = require("./controllers/fileControllers");
const rewardControllers = require("./controllers/rewardControllers");
const quizControllers = require("./controllers/quizControllers");

// PUBLIC ROUTES

// Users management
router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.post("/api/users", hashPassword, userControllers.add);
router.post(
  "/api/passwordReset",
  passwordControllers.verifyTokenPassword,
  (req, res) => res.sendStatus(200)
);

/* Authentification and login */
router.post("/api/users/register", hashPassword, userControllers.add);
router.post(
  "/api/login",
  authentificationControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Categories management
router.get("/api/categories", categoryControllers.browse);
router.get("/api/categories/:id", categoryControllers.read);

// Tutos management
/* Route to get all tutos by the category id */
router.get("/api/tutos/category_id/:id", tutoControllers.browse);
/* router to browseAll */
router.get("/api/tutos/all", tutoControllers.browseAll);

// Historical management
router.get(
  "/api/historical/:id",
  tutorialStatusControllers.browseAllTutoByUser
);
router.get(
  "/api/historical/unstarted/:id",
  tutorialStatusControllers.browseUnstartedTutoByUser
);
router.get(
  "/api/historical/started/:id",
  tutorialStatusControllers.browseStartedTutoByUser
);
router.get(
  "/api/historical/finished/:id",
  tutorialStatusControllers.browseFinisheddTutoByUser
);

router.get(
  "/api/tutorialStatus/:id",
  tutorialStatusControllers.browseAllTutoByUser
);

// Stepper management
router.get("/api/steppers/:id", stepperControllers.read);

// Reset password
router.post(
  "/api/forgottenpassword",
  passwordControllers.verifyEmail,
  passwordControllers.generatePasswordToken,
  mailControllers.sendForgottenPassword
);
router.post(
  `/api/resetpassword`,
  passwordControllers.verifyTokenPassword,
  hashPassword,
  passwordControllers.resetPassword
);

// Reset email
router.post(
  "/api/forgottenemail",
  passwordControllers.verifyEmail,
  mailControllers.sendForgottenEmail
);

// Avatar management
router.get("/api/avatars/:profilePicture", fileControllers.sendAvatar);

// PROTECTED ROUTES
router.use(verifyToken); // From this point, the middleware verifyToken will be used at the beginning of all functions

router.get("/api/tutos/:id", tutoControllers.read);

// Users management
router.put("/api/users/:id", userControllers.edit);

router.delete("/api/users/:id", userControllers.destroy);

// Categories management
router.put("/api/categories/:id", categoryControllers.edit);
router.post("/api/categories", categoryControllers.add);
router.delete("/api/categories/:id", categoryControllers.destroy);
router.get("/api/progressionTuto/:id", categoryControllers.progressionBar);

// Tutos management
router.put("/api/tutos/:id", tutoControllers.edit);
router.post("/api/tutos", tutoControllers.add);
router.delete("/api/tutos/:id", tutoControllers.destroy);

// TutorialStatus management
router.post(
  "/api/tutorialStatusStarted",
  tutorialStatusControllers.postToStart
);
router.put(
  "/api/tutorialStatusFinished",
  tutorialStatusControllers.updateToFinished
);
// router.post("/api/tutorialStatus", tutorialStatusControllers.add);

router.post("/api/tutoStatus", tutorialStatusControllers.addTutoStatus);

router.delete(
  "/api/deleteStatus/:id",
  tutorialStatusControllers.deleteStatusByUser
);

// Stepper management
router.delete(
  "/api/steppers/tuto_id/:id",
  stepperControllers.destroy
); /* road to destroy all stepper of a tutorial */

router.put("/api/steppers/:id", stepperControllers.edit);
router.post("/api/steppers", stepperControllers.add);
router.delete("/api/steppers/:id", stepperControllers.destroy);

// Reward routes
router.get("/api/rewards/:id", rewardControllers.getAllBadgeByUser);
router.post("/api/gainReward", rewardControllers.AddRewardToUser);
router.delete("/api/deleteReward/:id", rewardControllers.DeleteRewardForUser);

// Gestion des avatars

router.put(
  "/api/avatars",
  upload.single("profilePicture"),
  fileControllers.renameAvatar,
  userControllers.updateAvatar
);

// Gestion des quiz

router.get("/api/quiz", quizControllers.browseAllQuiz);
router.get("/api/allofquiz/:id", quizControllers.browseEverythingInQuiz);

module.exports = router;
