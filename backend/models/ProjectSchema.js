const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image1: {
        type: String,
    },
    image2: {
        type: String,
    },
    image3: {
        type: String,
    },
    image4: {
        type: String,
    },
    image5: {
        type: String,
    },
    image6: {
        type: String,
    },
    description1: {
        type: String
    },
    description2: {
        type: String
    },
    description3: {
        type: String
    },
    description4: {
        type: String
    },
    description5: {
        type: String
    },
    description6: {
        type: String
    },
},
    { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;