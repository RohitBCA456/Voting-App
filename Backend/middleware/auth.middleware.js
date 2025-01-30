import JWT from "jsonwebtoken";
import { Voter } from "../model/voters.model.js";
const auth = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer", "");
    if (!token) {
      res.status(404).json({ message: "Invalid Token." });
    }
    const decodedToken = JWT.verify(token, process.env.JWT_SECRET);
    const user = Voter.findById(decodedToken?.id).select(
      "-AdhaarNumber -phoneNumber"
    );
    if (!user) {
      res.status(404).json({ message: "User not found." });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: "Error: " + error.message });
  }
};

export { auth };
