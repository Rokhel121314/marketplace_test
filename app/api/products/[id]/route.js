import Product from "@models/productModel";
import connectDB from "@utils/database";

export const GET = async (req, { params }) => {
  const productId = params.id;
  try {
    await connectDB();

    const product = await Product.findById(productId);

    if (!product) {
      return new Response(`No product with and id: ${productId} found`, {
        status: 400,
      });
    } else {
      return new Response(JSON.stringify(product), { status: 200 });
    }
  } catch (error) {
    return new Response("Server error", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const productId = params.id;
  const { product_price } = await req.json();

  try {
    await connectDB();
    const product = await Product.findById(productId).exec();

    if (!product) {
      return new Response(`No product with and id: ${productId} found`, {
        status: 400,
      });
    } else {
      product.product_price = product_price;

      await product.save();

      return new Response(JSON.stringify(product), { status: 200 });
    }
  } catch (error) {
    return new Response("Server Error", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const productId = params.id;

  try {
    await connectDB();
    const product = await Product.findByIdAndDelete(productId).exec();

    if (!product) {
      return new Response(`No product with and id: ${productId} found`, {
        status: 400,
      });
    } else {
      return new Response(`Product with an id: ${productId} is deleted`, {
        status: 200,
      });
    }
  } catch (error) {
    return new Response("server error", { status: 500 });
  }
};
