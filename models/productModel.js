import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    product_name: {
      type: String,
      required: [true, "input product name"],
    },
    product_price: {
      type: Number,
      required: [true, "input product price"],
    },
    product_type: {
      type: String,
      required: [true, "include product category"],
      default: "others",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model("Product", productSchema);

export default Product;
