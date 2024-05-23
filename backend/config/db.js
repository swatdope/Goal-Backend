import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGO DB CONNECTED AT ${conn.connection.host}`.bgMagenta);
  } catch (error) {
    console.log(error);
  }
};
