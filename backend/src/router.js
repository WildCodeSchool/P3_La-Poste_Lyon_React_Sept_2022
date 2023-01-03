const express = require("express");

const router = express.Router();
const hashPassword = require("./views/auth");

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.post("/users", hashPassword, userControllers.add);
router.delete("/user/id:", userControllers.destroy);

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
