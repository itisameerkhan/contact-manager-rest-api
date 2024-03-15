import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

/*
 * @desc REGISTER a user
 * @route POST /api/users/register
 * @access PUBLIC
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are madentory");
  }

  const userAvailable = await User.findOne({ email: email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists with same email address");
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`user created successfully ${user}`);
  if (user) {
    res.status(200).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data not valid")
  }
  res.json({ status: true, message: "REGISTER USER" });
});

/*
 * @desc LOGIN a user
 * @route POST /api/users/login
 * @access PUBLIC
 */
export const loginUser = asyncHandler(async (req, res) => {
  res.json({ status: true, message: "LOGIN USER" });
});

/*
 * @desc CURRENT user info
 * @route POST /api/users/login
 * @access PRIVATE
 */
export const currentUser = asyncHandler(async (req, res) => {
  res.json({ status: true, message: "CURRENT USER" });
});
