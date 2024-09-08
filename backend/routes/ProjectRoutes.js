const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const { getAllProjects, createProject, deleteProject } = require("../controllers/ProjectController");

router.route("/project/createProject").post(upload.array("files", 10), createProject); //can upload 10 images at once
router.route("/project/getAllProjects").get(upload.none(), getAllProjects);

module.exports = router;
