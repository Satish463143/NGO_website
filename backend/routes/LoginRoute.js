const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { login } = require('../controllers/LoginController');


// POST login
router.route("/login").post(upload.none(), login);

module.exports = router;