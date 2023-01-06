const express = require("express");

const router = express.Router();

const { hashPassword, verifyPassword, verifyToken } = require("./views/auth");

// Users management

const userControllers = require("./controllers/userControllers");
const authentificationControllers = require("./controllers/authentificatorControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", verifyToken, userControllers.edit);
router.post("/users", hashPassword, verifyToken, userControllers.add);
router.delete("/users/:id", verifyToken, userControllers.destroy);

router.post(
  "/api/login",
  authentificationControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Categories management

const categoryControllers = require("./controllers/categoryControllers");

router.get("/categories", categoryControllers.browse);
router.get("/categories/:id", categoryControllers.read);
router.put("/categories/:id", verifyToken, categoryControllers.edit);
router.post("/categories", verifyToken, categoryControllers.add);
router.delete("/categories/:id", verifyToken, categoryControllers.destroy);

// Tutos management

const tutoControllers = require("./controllers/tutoControllers");

router.get("/tutos", tutoControllers.browse);
router.get("/tutos/:id", tutoControllers.read);
router.put("/tutos/:id", verifyToken, tutoControllers.edit);
router.post("/tutos", verifyToken, tutoControllers.add);
router.delete("/tutos/:id", verifyToken, tutoControllers.destroy);

// Status management

const statusControllers = require("./controllers/statusControllers");

router.get("/status", statusControllers.browse);
router.get("/status/:id", statusControllers.read);
router.put("/status/:id", verifyToken, statusControllers.edit);
router.post("/status", verifyToken, statusControllers.add);
router.delete("/status/:id", verifyToken, statusControllers.destroy);

// Stepper management

const stepperControllers = require("./controllers/stepperControllers");

router.get("/steppers", stepperControllers.browse);
router.get("/steppers/:id", stepperControllers.read);
router.put("/steppers/:id", verifyToken, stepperControllers.edit);
router.post("/steppers", verifyToken, stepperControllers.add);
router.delete("/steppers/:id", verifyToken, stepperControllers.destroy);

module.exports = router;
