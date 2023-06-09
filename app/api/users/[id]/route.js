import User from "@models/userModel";
import connectDB from "@utils/database";

// reading single user
export const GET = async (req, { params }) => {
  const userId = params.id;
  try {
    await connectDB();
    const user = await User.findById(userId).exec();

    if (user) {
      return new Response(JSON.stringify(user), { status: 200 });
    } else {
      return new Response("User does not exist", { status: 404 });
    }
  } catch (error) {
    return new Response("error", error.message, { status: 500 });
  }
};

// updating user
export const PUT = async (req, { params }) => {
  const userId = params.id;
  const { username, password } = await req.json();

  try {
    await connectDB();
    const user = await User.findById(userId).exec();

    if (!user) {
      return new Response("User does not exist", { status: 404 });
    }

    // update values
    user.username = username;
    user.password = password;

    await user.save();

    return new Response("User details successfully updated", { status: 200 });
  } catch (error) {
    return new Response("error", error.message, { status: 500 });
  }
};

// deleting user

export const DELETE = async (req, { params }) => {
  const userId = params.id;

  try {
    await connectDB();

    await User.findByIdAndRemove(userId).exec();

    return new Response("User successfully deleted!", { status: 200 });
  } catch (error) {
    return new Response("error", error.message, { status: 500 });
  }
};
