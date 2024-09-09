const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const { getAllPartners, deletePartner, addPartner } = require("../controllers/PartnersController");

router.route("/our-partners/get-all-partners").get(upload.none(), getAllPartners);
router.route("/our-partners/delete-partner/:partnerID").delete(upload.none(), deletePartner);
router.route("/our-partners/add-partner").post(upload.single("file"), addPartner);

module.exports = router;