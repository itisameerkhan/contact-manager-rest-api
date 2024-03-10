/*
 * @desc GET all contacts
 * @route GET /api/contacts
 * @access PUBLIC
 */
export const getContacts = (req, res) => {
  res.status(200).json({ sucess: true, message: "GET method" });
};

/*
 * @desc GET single contact with Id
 * @route GET /api/contacts/:id
 * @access PUBLIC
 */
export const getContactWithId = (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: `GET method for ID ${req.params.id}` });
};

/*
 * @desc CREATE new contact
 * @route POST /api/contacts
 * @access PUBLIC
 */
export const createContact = (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;

  if(!name || !email || !phone) {
    res.status(400);
    throw new Error("missing field")
  }
  res.status(201).json({ sucess: true, message: "POST method" });
};

/*
 * @desc UPDATE existing contact with id
 * @route PUT /api/contacts/:id
 * @access PUBLIC
 */
export const updateContact = (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: `PUT method ${req.params.id}` });
};

/*
 * @desc DELETE existing contact with id
 * @route DELETE /api/contacts/:id
 * @access PUBLIC
 */
export const deleteContact = (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: `DELETE method ${req.params.id}` });
};
