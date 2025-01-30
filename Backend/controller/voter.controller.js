import { Candidate } from "../model/candidates.model.js";
import { Voter } from "../model/voters.model.js";
const login = async (req, res) => {
  try {
    const { adhaarCard, phNumber } = req.body;
    const voter = await Voter.findOne({ AdhaarNumber: adhaarCard });
    if (!voter) {
      return res.status(404).json({ message: "Voter not found." });
    }
    const token = await voter.generateToken();
    voter.token = token;
    const options = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .cookie(token, options)
      .json({ message: "Login successful." });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: "Error while logging in." });
  }
};

const vote = async (req, res) => {
  try {
    const { candidateId } = req.params;
    const candidate = await Candidate.findById(candidateId);
    const voter = await Voter.findById(req.user?._id);
    if (voter.isVoted === true) {
      return res.status(300).json({ message: "You already gave a vote." });
    }
    candidate.votes = voter._id;
    candidate.voteCount++;
    voter.isVoted = true;
    voter.save({ validateBeforeSave: false });
    candidate.save({ validateBeforeSave: false });
    return res.status(200).json({ message: "Vote successfully registered." });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: "Error while voting." });
  }
};

const logout = async (req, res) => {
  try {
    const user = await Voter.findOneAndUpdate(req.user?._id, {
      $set: { token: undefined },
    });
    return res.status(200), json({ message: "Loggout successfully." });
  } catch (error) {
    return res.status(400).json({ message: "Error: " + error.message });
  }
};

export { login, vote, logout };
