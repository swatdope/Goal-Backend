import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import goalRoute from "./routes/goalRoute.js";
import userRoute from "./routes/userRoute.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

// configurations
dotenv.config();
connectDB();

const PORT = process.env.PORT || 8000;

const app = express();

// read body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/goals/", goalRoute);
app.use("/api/users/", userRoute);

app.use(errorHandler);

app.listen(PORT, console.log(`Server is connected at PORt ${PORT}`.bgCyan));
