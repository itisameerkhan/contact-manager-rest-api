import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("server listening on PORT ->", process.env.PORT);
});

app.use("/api/contacts", contactRoutes);