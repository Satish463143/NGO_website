const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    images: [
        {
            imageURL: String,
            imageCaption: String
        }
    ],
},
    { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;