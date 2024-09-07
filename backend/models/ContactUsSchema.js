import mongoose from "mongoose";

const ContactUsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    number: {
        type: String,
    },
    message: {
        type: String,
    },
},
    { timestamps: true }
);

export default mongoose.model("ContactUs", ContactUsSchema);