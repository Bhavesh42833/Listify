import jwt from "jsonwebtoken";
import Users from "../models/users.js";

export const Authentication = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Login First",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = await Users.findById(decoded._id);
    next();
  } catch (err) {
    return res.status(403).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};
