import Product from "@models/productModel";
import connectDB from "@utils/database";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

// create new product
export const POST = async (req) => {
  const { product_name, product_price, product_type, userId } =
    await req.json();

  try {
    await connectDB();
    const productOfUser = await Product.find({
      createdBy: new ObjectId(userId),
    });
    const productNames = productOfUser.map((product) => product.product_name);

    if (productNames.includes(product_name)) {
      return new Response("Product already exist", { status: 200 });
    } else {
      const newProduct = await new Product({
        createdBy: userId,
        product_name,
        product_price,
        product_type,
      });

      await newProduct.save();

      return new Response(JSON.stringify(newProduct), { status: 200 });
    }
  } catch (error) {
    return new Response("error", error.message, { status: 500 });
  }
};
