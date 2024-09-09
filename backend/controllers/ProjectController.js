const Project = require("../models/ProjectSchema");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    api_key: "483918366433987",
    cloud_name: "deoefj9hc",
    api_secret: "UUJDDgPBGNA2ki8gq9tIrW0Er_0",
});

exports.createProject = async (req, res) => {
    try {
        const { title, description, imageURL } = req.body;

        //cloudinary upload with image_path
        // const cloudinary_res = await cloudinary.uploader.upload(
        //     file_path, {
        //     folder: "Hiraya",
        //     unique_filename: true,
        //     overwrite: false,
        // });

        new Promise((resolve) => {
            cloudinary.uploader.upload_stream({
                folder: "Hiraya",
                unique_filename: true,
                overwrite: false,
            }, (error, uploadResult) => {
                return resolve(uploadResult);
            }).end(req.files[0].buffer); //change this
        }).then((uploadResult) => {
            const newProject = new Project({
                title: title,
                description: description,
                images: [
                    {
                        imageURL: uploadResult.secure_url,
                        imageCaption: "test caption" //need to change this
                    }
                ]
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
            message: "Failed to add."
        });
    }
};

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find({});
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
            message: "Projects delete successfully.",
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