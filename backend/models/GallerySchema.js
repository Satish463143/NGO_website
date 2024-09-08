const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
    imagePath: {
        type: String
    }
},
    { timestamps: true }
);

const Gallery = mongoose.model("Gallery", GallerySchema);

module.exports = Gallery;