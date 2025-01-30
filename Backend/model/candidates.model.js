import mongoose, { Schema } from "mongoose";

const candidateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    party: {
      type: String,
      required: true,
    },
    votes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Voter",
      },
    ],
    voteCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Candidate = mongoose.model("Candidate", candidateSchema);
