const express = require("express");

const router = express.Router();

const { hashPassword, verifyPassword, verifyToken } = require("./views/auth");

const userControllers = require("./controllers/userControllers");
const authentificationControllers = require("./controllers/authentificatorControllers");
const categoryControllers = require("./controllers/categoryControllers");
const tutoControllers = require("./controllers/tutoControllers");
const stepperControllers = require("./controllers/stepperControllers");

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
router.get("/api/tutos", tutoControllers.browse);
router.get("/api/tutos/:id", tutoControllers.read);

// Stepper management
router.get("/api/steppers", stepperControllers.browse);
router.get("/api/steppers/:id", stepperControllers.read);

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

// Stepper management
router.put("/api/steppers/:id", stepperControllers.edit);
router.post("/api/steppers", stepperControllers.add);
router.delete("/api/steppers/:id", stepperControllers.destroy);

module.exports = router;
