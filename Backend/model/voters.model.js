import mongoose, { Schema } from "mongoose";
import JWT from "jsonwebtoken";
const voterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    AdhaarNumber: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    token: {
      type: String,
    },
    isVoted: {
          type: Boolean,
          default: false,
    },
  },
  { timestamps: true }
);

voterSchema.methods.generateToken = function () {
  return JWT.sign(
    {
      id: this._id,
    },
    process.env.JWTSECRET,
    {
      expiresIn: "1d",
    }
  );
};

export const Voter = mongoose.model("Voter", voterSchema);
