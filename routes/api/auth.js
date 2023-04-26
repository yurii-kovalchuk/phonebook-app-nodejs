const express = require("express");

const {
  register,
  login,
  logout,
  getCurrent,
} = require("../../controllers/auth");
const { authenticate } = require("../../middlewares");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrent);

module.exports = router;
