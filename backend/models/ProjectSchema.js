const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    imageURL: {
        type: String,
    },
    reportURL: {
        type: String
    }
},
    { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;