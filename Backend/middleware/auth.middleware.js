import JWT from "jsonwebtoken";
import { Voter } from "../model/voters.model.js";
const auth = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
      console.log(`token recieved: ${token}`);
    if (!token) {
      return res.status(404).json({ message: "Invalid Token." });
    }

    // Verify token
    const decodedToken = JWT.verify(token, process.env.JWT_SECRET);
    const user = await Voter.findById(decodedToken?.id).select(
      "-AdhaarNumber -phoneNumber"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error: " + error.message });
  }
};
export { auth };
