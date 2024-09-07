import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
    imagePath: {
        type: String
    }
},
    { timestamps: true }
);

export default mongoose.model("Gallery", GallerySchema);