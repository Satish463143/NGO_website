import mongoose from "mongoose";

const ContactUsSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    images: {
        type: Array
    }

},
    { timestamps: true }
);

export default mongoose.model("ContactUs", ContactUsSchema);