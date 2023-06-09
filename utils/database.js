import mongoose from "mongoose";

let dbConnected = false; //track connection

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (dbConnected) {
    console.log("MongoDB is connected!");
    return;
  } else {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        // OPTIONS
        dbName: "MARKETPLACE",
        useNewUrlParser: true, //remove depricated warning
        useUnifiedTopology: true, //remove depricated warning
      });

      dbConnected = true;
      console.log("MongoDB just connected!");
    } catch (error) {
      console.log("error", error.message);
    }
  }
};
export default connectDB;
