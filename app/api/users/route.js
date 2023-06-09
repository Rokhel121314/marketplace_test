import User from "@models/userModel";
import connectDB from "@utils/database";

// register new user
export const POST = async (req, res) => {
  const { username, password } = await req.json();

  try {
    connectDB();
    const user = await User.findOne({ username }).exec();
    if (user) {
      return new Response("Username already in use!", { status: 200 });
    } else {
      const newUser = new User({ username: username, password: password });
      await newUser.save();
      return new Response(JSON.stringify(newUser), { status: 200 });
    }
  } catch (error) {
    return new Response("Failed to register new user", error.message, {
      status: 500,
    });
  }
};

// reading all user
export const GET = async (req, res) => {
  try {
    await connectDB();
    const user = await User.find({});

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Cant fetch user", error.message, { status: 500 });
  }
};
