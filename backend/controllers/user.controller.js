import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "../utils/cloudinary.js";
const registerUser = async (req, res) => {
  try {
    const { fullname, email, password, phoneNumber, role } = req.body;
    // const profilePhoto = req.file;
    // console.log(fullname, email, password, phoneNumber, role);
    if (!fullname || !email || !password || !phoneNumber || !role) {
      return res.status(400).json({
        message: "All fields are mandatory",
        success: false,
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email id Already exists",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
      phoneNumber,
      role,
    });
    return res.status(201).json({
      message: "User created successfully",
      success: true,
      file: req.file,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "All fields are mandatory",
        success: false,
      });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(400).json({
        message: "incorrect email or password",
        success: false,
      });
    }
    //checking if role is correct or not
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account  doesnt exists with this role",
        success: false,
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `welcome back ${user.fullname}`,
        success: true,
        user,
      });
  } catch (error) {
    return res.status(500).json({
      message: "Internal srever error",
      success: false,
    });
  }
};

const logoutUser = async (req, res) => {
  return res.status(200).cookie("token", "", { maxAge: 0 }).json({
    message: "Loggedout successfully",
    success: true,
  });
};

// updating the user

const updateUser = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;
    // const { resume } = req.file;
    console.log(req.file);
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    console.log(fullname, email, phoneNumber, bio, skills);
    // const userId = req.userId;
    const user = await User.findById(req.user._id);
    console.log(user);
    if (!user) {
      return res.status(404).json({
        message: "User not hh found",
        success: false,
      });
    }
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) {
      user.profile.skills = skills.split(",");
    }
    if (req.file) {
      user.profile.resume = cloudResponse.secure_url;
      user.profile.resumeOriginalName = file.originalname;
    }
    await user.save();
    return res.status(200).json({
      message: "User updated successfully",
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error",
      success: false,
    });
  }
};
export { registerUser, loginUser, logoutUser, updateUser };
