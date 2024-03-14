import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/dbConnection.js";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();

connectDB();
const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("server listening on PORT ->", process.env.PORT);
});

app.use("/api/contacts", contactRoutes);

app.use("/api/users", userRoutes);

app.use(errorHandler);