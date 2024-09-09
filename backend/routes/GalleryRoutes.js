const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const { getAllImages, deleteImage, addImage } = require("../controllers/GalleryController");

router.route("/gallery/add-image").post(upload.array("files", 10), addImage); //can upload 10 images at once
router.route("/gallery/get-all-images").get(upload.none(), getAllImages);
router.route("/gallery/delete-image/:imageID").delete(upload.none(), deleteImage);

module.exports = router;
