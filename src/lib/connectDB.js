import mongoose from "mongoose";

export default async function connectDB() {
  let isCompleted = false;
  if (isCompleted) return "Already Connected";
  try {
    let connected = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected Successfull");
    if (connected.connection.readyState == 1) isCompleted = true;
  } catch (error) {
    console.log(error);
  }
}
