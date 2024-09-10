const mongoose = require("mongoose");

const PartnersSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    imagePath: {
        type: String
    }
},
    { timestamps: true }
);

const Partners = mongoose.model("Partners", PartnersSchema);

module.exports = Partners;