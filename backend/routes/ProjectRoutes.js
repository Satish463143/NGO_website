const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const { getAllProjects, createProject, deleteProject, editProject, getProject } = require("../controllers/ProjectController");

router.route("/project/create-project").post(upload.single("file"), createProject);
router.route("/project/edit-project/:projectID").put(upload.single("file"), editProject);
router.route("/project/get-all-projects").get(upload.none(), getAllProjects);
router.route("/project/get-project/:projectID").get(upload.none(), getProject);
router.route("/project/delete-project/:projectID").delete(upload.none(), deleteProject);

module.exports = router;
