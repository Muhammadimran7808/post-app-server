import express from "express";
import {
  getProfilePicController,
  loginController,
  registerController,
  requireSignIn,
  updateProfileController,
  updateProfilePicController,
} from "../controllers/authController.js";
import { upload } from "../middlewares/multer.js";

// roter object
const router = express.Router();

// ----------Routing---------

// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN
router.post("/login", loginController);

// Update Profile || PUT
router.put("/update-profile", requireSignIn, updateProfileController);

// update profile pic
router.put(
  "/update-picture",
  requireSignIn,
  upload.fields([
    { name: "file", maxCount: 1 },
  ]),
  updateProfilePicController
);

// get user profile
router.get("/profile-picture", requireSignIn, getProfilePicController);

export default router;
