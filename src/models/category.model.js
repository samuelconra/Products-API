import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  active: {
    type: Boolean,
  }
});

export default mongoose.model("Category", CategorySchema);
