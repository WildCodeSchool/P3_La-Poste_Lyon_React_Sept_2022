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

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

// Categories management

const categoryControllers = require("./controllers/categoryControllers");

router.get("/users", categoryControllers.browse);
router.get("/user/:id", categoryControllers.read);
router.put("/user/:id", categoryControllers.edit);
router.post("/users", hashPassword, categoryControllers.add);
router.delete("/user/:id", userControllers.destroy);

module.exports = router;
