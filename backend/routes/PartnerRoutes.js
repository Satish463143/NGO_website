const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const { getAllPartners, deletePartner, addPartner, editPartner, getPartner } = require("../controllers/PartnersController");

router.route("/our-partners/get-all-partners").get(upload.none(), getAllPartners);
router.route("/our-partners/get-partner/:partnerID").get(upload.none(), getPartner);
router.route("/our-partners/delete-partner/:partnerID").delete(upload.none(), deletePartner);
router.route("/our-partners/edit-partner/:partnerID").put(upload.single("file"), editPartner);
router.route("/our-partners/add-partner").post(upload.single("file"), addPartner);

module.exports = router;