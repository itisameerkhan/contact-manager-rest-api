import mongoose from "mongoose";

const userModel = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the username"],
    },
    email: {
      type: String,
      required: [true, "Please add email address"],
      unique: [true, "email address already taken"],
    },
    password: {
      type: String,
      required: [true, "password number required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userModel);
