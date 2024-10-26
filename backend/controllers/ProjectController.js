const Project = require("../models/ProjectSchema");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    api_key: "483918366433987",
    cloud_name: "deoefj9hc",
    api_secret: "UUJDDgPBGNA2ki8gq9tIrW0Er_0",
});

exports.createProject = async (req, res) => {
    try {
        const { title, reportURL, description } = req.body;

        //image upload with buffer
        new Promise((resolve) => {
            cloudinary.uploader.upload_stream({
                folder: "Hiraya",
                unique_filename: true,
                overwrite: false,
            }, (error, uploadResult) => {
                return resolve(uploadResult);
            }).end(req.file.buffer); //change this
        }).then((uploadResult) => {
            const newProject = new Project({
                title: title,
                description: description,
                reportURL: reportURL,
                imageURL: uploadResult.secure_url,
            });
            newProject.save();
        });

        res.status(200).json({
            success: true,
            message: "New project added succesfully."
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to add project.",
        });
    }
};

exports.editProject = async (req, res) => {
    try {
        const { title, reportURL, description } = req.body;
        const { projectID } = req.body;

        //image upload with buffer
        new Promise((resolve) => {
            cloudinary.uploader.upload_stream({
                folder: "Hiraya",
                unique_filename: true,
                overwrite: false,
            }, (error, uploadResult) => {
                return resolve(uploadResult);
            }).end(req.file.buffer);
        }).then(async (uploadResult) => {
            await Project.findByIdAndUpdate(
                projectID, {
                title: title,
                description: description,
                reportURL: reportURL,
                imageURL: uploadResult.secure_url,
            });
        });

        res.status(200).json({
            success: true,
            message: "Project updated succesfully."
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to edit project.",
        });
    }
};

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find({}).sort({ "createdAt": -1 });
        res.status(200).json({
            success: true,
            message: "Projects fetched successfully.",
            data: projects
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch projects."
        });
    }
};

//delete from cloudinary pending
exports.deleteProject = async (req, res) => {
    const projectID = req.params.projectID;

    try {
        await Project.findByIdAndDelete(projectID);

        res.status(200).json({
            success: true,
            message: "Projects deleted successfully.",
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to delete project."
        });
    }
};