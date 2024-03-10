import express from "express";
import {
  getContact,
  getContactWithId,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.get("/", getContact);

router.get("/:id", getContactWithId);

router.post("/", createContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

export default router;
