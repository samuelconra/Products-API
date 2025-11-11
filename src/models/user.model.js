import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
});

export default mongoose.model("User", UserSchema);
