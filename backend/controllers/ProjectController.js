const Project = require("../models/ProjectSchema");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    api_key: "483918366433987",
    cloud_name: "deoefj9hc",
    api_secret: "UUJDDgPBGNA2ki8gq9tIrW0Er_0",
});

exports.createProject = async (req, res) => {
    try {
        const { title, description, description1, description2, description3, description4, description5, description6 } = req.body;

        //cloudinary upload with image_path
        // const cloudinary_res = await cloudinary.uploader.upload(
        //     file_path, {
        //     folder: "Hiraya",
        //     unique_filename: true,
        //     overwrite: false,
        // });

        let imageURLs = ["", "", "", "", "", ""];

        req.files.forEach((image, index) => {
            new Promise((resolve) => {
                cloudinary.uploader.upload_stream({
                    folder: "Hiraya",
                    unique_filename: true,
                    overwrite: false,
                }, (error, uploadResult) => {
                    return resolve(uploadResult);
                }).end(image.buffer); //change this
            }).then((uploadResult) => {
                imageURLs[index] = uploadResult.secure_url;
            });
        });

        const newProject = new Project({
            title,
            description,
            image1: imageURLs[0],
            image2: imageURLs[1],
            image3: imageURLs[2],
            image4: imageURLs[3],
            image5: imageURLs[4],
            image6: imageURLs[5],
            description1,
            description2,
            description3,
            description4,
            description5,
            description6,
        });
        newProject.save();

        console.log(newProject);

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