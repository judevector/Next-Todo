import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to MongoDB Database");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to MongoDB Database");
  }
};

export default connectDB;
