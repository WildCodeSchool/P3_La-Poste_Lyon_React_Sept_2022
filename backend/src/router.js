const express = require("express");

const router = express.Router();

const { hashPassword, verifyPassword, verifyToken } = require("./views/auth");

const userControllers = require("./controllers/userControllers");
const authentificationControllers = require("./controllers/authentificatorControllers");
const categoryControllers = require("./controllers/categoryControllers");
const tutoControllers = require("./controllers/tutoControllers");
const statusControllers = require("./controllers/statusControllers");
const stepperControllers = require("./controllers/stepperControllers");

// PUBLIC ROUTES

// Users management
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post(
  "/api/login",
  authentificationControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Categories management
router.get("/categories", categoryControllers.browse);
router.get("/categories/:id", categoryControllers.read);

// Tutos management
router.get("/tutos", tutoControllers.browse);
router.get("/tutos/:id", tutoControllers.read);

// Status management
router.get("/status", statusControllers.browse);
router.get("/status/:id", statusControllers.read);

// Stepper management
router.get("/steppers", stepperControllers.browse);
router.get("/steppers/:id", stepperControllers.read);

// PROTECTED ROUTES
router.use(verifyToken); // From this point, the middleware verifyToken will be used at the beginning of all functions

// Users management
router.put("/users/:id", userControllers.edit);
router.post("/users", hashPassword, userControllers.add);
router.delete("/users/:id", userControllers.destroy);

// Categories management
router.put("/categories/:id", categoryControllers.edit);
router.post("/categories", categoryControllers.add);
router.delete("/categories/:id", categoryControllers.destroy);

// Tutos management
router.put("/tutos/:id", tutoControllers.edit);
router.post("/tutos", tutoControllers.add);
router.delete("/tutos/:id", tutoControllers.destroy);

// Status management
router.put("/status/:id", statusControllers.edit);
router.post("/status", statusControllers.add);
router.delete("/status/:id", statusControllers.destroy);

// Stepper management
router.put("/steppers/:id", stepperControllers.edit);
router.post("/steppers", stepperControllers.add);
router.delete("/steppers/:id", stepperControllers.destroy);

module.exports = router;
