const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const { getAllContacts, deleteContact } = require('../controllers/ContactUsController');

router.route("/contact-us/get-all-contacts").get(upload.none(), getAllContacts);
router.route("/contact-us/delete-contact").delete(upload.none(), deleteContact);

module.exports = router;