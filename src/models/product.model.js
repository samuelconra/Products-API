import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
  stock: {
    type: Int8Array,
  },
  categoryId: {
    type: String,
  },
  brandId: {
    type: String,
  }
});

export default mongoose.model("Product", ProductSchema);
