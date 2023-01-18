const express = require("express");

const router = express.Router();

const { hashPassword, verifyPassword, verifyToken } = require("./views/auth");

const userControllers = require("./controllers/userControllers");
const authentificationControllers = require("./controllers/authentificatorControllers");
const categoryControllers = require("./controllers/categoryControllers");
const tutoControllers = require("./controllers/tutoControllers");
const stepperControllers = require("./controllers/stepperControllers");
const tutorialStatusControllers = require("./controllers/tutorialStatusControllers");

// PUBLIC ROUTES

// Users management
router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.post("/api/users", hashPassword, userControllers.add);

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
router.get("/api/tutos/:id", tutoControllers.read);

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

// Stepper management
router.get("/api/steppers", stepperControllers.browse);
router.get("/api/steppers/:id", stepperControllers.read);

//

// PROTECTED ROUTES
router.use(verifyToken); // From this point, the middleware verifyToken will be used at the beginning of all functions

// Users management
router.put("/api/users/:id", userControllers.edit);

router.delete("/api/users/:id", userControllers.destroy);

// Categories management
router.put("/api/categories/:id", categoryControllers.edit);
router.post("/api/categories", categoryControllers.add);
router.delete("/api/categories/:id", categoryControllers.destroy);

// Tutos management
router.put("/api/tutos/:id", tutoControllers.edit);
router.post("/api/tutos", tutoControllers.add);
router.delete("/api/tutos/:id", tutoControllers.destroy);

// TutorialStatus management
router.put(
  "/api/tutorialStatusStarted",
  tutorialStatusControllers.updateToStart
);
router.put(
  "/api/tutorialStatusFinished",
  tutorialStatusControllers.updateToFinished
);
// router.post("/api/tutorialStatus", tutorialStatusControllers.add);

router.post("/api/TutoStatus", tutorialStatusControllers.addTutoStatus);

// Stepper management
/* road to destroy all stepper of a tutorial */
router.delete("/api/steppers/tuto_id/:id", stepperControllers.destroy);
router.put("/api/steppers/:id", stepperControllers.edit);
router.post("/api/steppers", stepperControllers.add);
router.delete("/api/steppers/:id", stepperControllers.destroy);

module.exports = router;
