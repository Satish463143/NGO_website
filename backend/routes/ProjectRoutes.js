const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const { getAllProjects, createProject, deleteProject } = require("../controllers/ProjectController");

router.route("/project/create-project").post(upload.array("files", 10), createProject); //can upload 10 images at once
router.route("/project/get-all-projects").get(upload.none(), getAllProjects);
router.route("/project/delete-project/:projectID").delete(upload.none(), deleteProject);

module.exports = router;
