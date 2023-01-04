const express = require("express");

const router = express.Router();

const hashPassword = require("./views/auth");

// Users management

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/users", hashPassword, userControllers.add);
router.delete("/user/:id", userControllers.destroy);

// Categories management

const categoryControllers = require("./controllers/categoryControllers");

router.get("/categories", categoryControllers.browse);
router.get("/category/:id", categoryControllers.read);
router.put("/category/:id", categoryControllers.edit);
router.post("/category", categoryControllers.add);
router.delete("/category/:id", categoryControllers.destroy);

// Tutos management

const tutoControllers = require("./controllers/tutoControllers");

router.get("/tutos", tutoControllers.browse);
router.get("/tuto/:id", tutoControllers.read);
router.put("/tuto/:id", tutoControllers.edit);
router.post("/tuto", tutoControllers.add);
router.delete("/tuto/:id", tutoControllers.destroy);

// Status management

const statusControllers = require("./controllers/statusControllers");

router.get("/status", statusControllers.browse);
router.get("/status/:id", statusControllers.read);
router.put("/status/:id", statusControllers.edit);
router.post("/status", statusControllers.add);
router.delete("/status/:id", statusControllers.destroy);

// Stepper management

const stepperControllers = require("./controllers/stepperControllers");

router.get("/steppers", stepperControllers.browse);
router.get("/stepper/:id", stepperControllers.read);
router.put("/stepper/:id", stepperControllers.edit);
router.post("/steppers", stepperControllers.add);
router.delete("/stepper/:id", stepperControllers.destroy);

module.exports = router;
