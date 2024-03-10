import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ sucess: true, message: "GET method" });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: `GET method for ID ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ sucess: true, message: "POST method" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: `PUT method ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: `DELETE method ${req.params.id}` });
});

export default router;
