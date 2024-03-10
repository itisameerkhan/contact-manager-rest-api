import express from "express";
import {
  getContacts,
  getContactWithId,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.route("/").get(getContacts).post(createContact);

router
  .route("/:id")
  .get(getContactWithId)
  .put(updateContact)
  .delete(deleteContact);

export default router;