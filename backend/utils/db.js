import mongoose from "mongoose";
const connectDB = async () => {
  console.log(connectDB);
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Database successfully");
  } catch (error) {
    console.log("Connection to Database  failed!");
    process.exit(1);
  }
};
export default connectDB;
