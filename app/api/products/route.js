import connectDB from "@utils/database";
import Product from "@models/productModel";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

// view all products by User

export const POST = async (req) => {
  const { userId } = await req.json();

  try {
    await connectDB();
    const product = await Product.find({ createdBy: new ObjectId(userId) });

    return new Response(JSON.stringify(product), {
      status: 200,
    });
  } catch (error) {
    return new Response(`ERROR ${error}`, {
      status: 500,
    });
  }
};
