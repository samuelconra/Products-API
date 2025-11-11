import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
  },
  active: {
    type: Boolean,
    required: true,
  }
});

export default mongoose.model("Category", CategorySchema);
