import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // console.log(decoded);
    if (!decoded) {
      return res.status(404).json({
        message: "Invalid token",
        success: false,
      });
    }
    const user = await User.findById(decoded.userId);
    // console.log(user);
    if (!user) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error",
      success: false,
    });
  }
};
export default isAuthenticated;
