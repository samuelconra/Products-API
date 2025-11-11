import mongoose from "mongoose";

const BrandSchema = mongoose.Schema({
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

export default mongoose.model("Brand", BrandSchema);
