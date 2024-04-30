import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "please enter email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "please enter password"],
      min: 6,
      max: 32,
    },
    profilePicture: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
        // default: "https://res.cloudinary.com/dw2j5lq1w/image/upload/v1629343438/avataaars",
      },
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", userSchema); // "Users" is the relation in database
