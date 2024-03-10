import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("server listening on PORT ->", process.env.PORT);
});

app.get("/api/contacts", (req, res) => {
  res.status(200).json({ success: true });
});
