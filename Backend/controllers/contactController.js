import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";

/*
 * @desc GET all contacts
 * @route GET /api/contacts
 * @access PUBLIC
 */
export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

/*
 * @desc GET single contact with Id
 * @route GET /api/contacts/:id
 * @access PUBLIC
 */
export const getContactWithId = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(400);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});

/*
 * @desc CREATE new contact
 * @route POST /api/contacts
 * @access PUBLIC
 */
export const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("missing field");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

/*
 * @desc UPDATE existing contact with id
 * @route PUT /api/contacts/:id
 * @access PUBLIC
 */
export const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(400);
    throw new Error("Contact Not Found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res
    .status(200)
    .json(updatedContact);
});

/*
 * @desc DELETE existing contact with id
 * @route DELETE /api/contacts/:id
 * @access PUBLIC
 */
export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(400);
    throw new Error("Contact Not Found");
  }

  const deletedContact = await Contact.findByIdAndDelete(req.params.id)
  res
    .status(200)
    .json(deletedContact);
});
