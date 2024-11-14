const Partners = require("../models/PartnersSchema");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    api_key: "483918366433987",
    cloud_name: "deoefj9hc",
    api_secret: "UUJDDgPBGNA2ki8gq9tIrW0Er_0",
});

exports.addPartner = async (req, res) => {
    try {
        const { name, description } = req.body;

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
            const newPartner = new Partners({
                name: name,
                description: description,
                imagePath: uploadResult.secure_url,
            });
            newPartner.save();
        });

        res.status(200).json({
            success: true,
            message: "New partner added succesfully."
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

exports.editPartner = async (req, res) => {
    try {
        const { name, description } = req.body;
        const { partnerID } = req.params;

        if (req.file) {
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
                await Partners.findByIdAndUpdate(
                    partnerID, {
                    name: name,
                    description: description,
                    imagePath: uploadResult.secure_url,
                });
            });
        }
        else {
            await Partners.findByIdAndUpdate(
                partnerID, {
                name: name,
                description: description,
            });
        }

        res.status(200).json({
            success: true,
            message: "Partner info updated succesfully.",
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to edit."
        });
    }
};

exports.getAllPartners = async (req, res) => {
    try {
        const partners = await Partners.find({}).sort({ "createdAt": -1 });
        res.status(200).json({
            success: true,
            message: "Partners fetched successfully.",
            data: partners
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch partners."
        });
    }
};

exports.getPartner = async (req, res) => {
    const { partnerID } = req.params;
    try {
        const partner = await Partners.findById(partnerID)

        res.status(200).json({
            success: true,
            message: "Partner fetched successfully.",
            data: partner
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch partner."
        });
    }
};

//delete from cloudinary pending
exports.deletePartner = async (req, res) => {
    const partnerID = req.params.partnerID;

    try {
        await Partners.findByIdAndDelete(partnerID);

        res.status(200).json({
            success: true,
            message: "Partner deleted successfully.",
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to delete partner."
        });
    }
};