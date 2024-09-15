const Gallery = require("../models/GallerySchema");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    api_key: "483918366433987",
    cloud_name: "deoefj9hc",
    api_secret: "UUJDDgPBGNA2ki8gq9tIrW0Er_0",
});

exports.addImage = async (req, res) => {
    console.log(req.files);
    try {
        req.files.forEach(image => {
            new Promise((resolve) => {
                cloudinary.uploader.upload_stream({
                    folder: "Hiraya",
                    unique_filename: true,
                    overwrite: false,
                }, (error, uploadResult) => {
                    return resolve(uploadResult);
                }).end(image.buffer); //change this
            }).then((uploadResult) => {
                const newImage = new Gallery({
                    imagePath: uploadResult.secure_url,
                });
                newImage.save();
            });
        });

        res.status(200).json({
            success: true,
            message: "New image added succesfully."
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

exports.getAllImages = async (req, res) => {
    try {
        const images = await Gallery.find({});
        res.status(200).json({
            success: true,
            message: "Images fetched successfully.",
            data: images
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch images."
        });
    }
};

//delete from cloudinary pending
exports.deleteImage = async (req, res) => {
    const imageID = req.params.imageID;

    try {
        await Gallery.findByIdAndDelete(imageID);

        res.status(200).json({
            success: true,
            message: "Images deleted successfully.",
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to delete image."
        });
    }
};