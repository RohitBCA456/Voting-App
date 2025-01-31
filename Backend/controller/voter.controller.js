import { Candidate } from "../model/candidates.model.js";
import { Voter } from "../model/voters.model.js";
const login = async (req, res) => {
  try {
    const { adhaarCard, phNumber } = req.body;
    const voter = await Voter.findOne({
      AdhaarNumber: adhaarCard,
      phoneNumber: phNumber,
    });
    if (!voter) {
      return res.status(404).json({ message: "Voter not found." });
    }
    const token = await voter.generateToken();
    voter.token = token;
    voter.save({ validateBeforeSave: false });
    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
    };
    return res
      .status(200)
      .cookie("token", token, options)
      .json({ message: "Login successful." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error while logging in." });
  }
};

const vote = async (req, res) => {
  try {
    const { candidateId } = req.body;
    const candidate = await Candidate.findById(candidateId);
    const voter = await Voter.findById(req.user?._id);

    if (voter.isVoted === true) {
      return res.status(400).json({ message: "You already gave a vote." });
    }

    candidate.votes.push(voter._id);
    candidate.voteCount++;
    voter.isVoted = true;

    await voter.save({ validateBeforeSave: false });
    await candidate.save({ validateBeforeSave: false });

    return res.status(200).json({ message: "Vote successfully registered." });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error while voting." });
  }
};

const logout = async (req, res) => {
  try {
    const user = await Voter.findOneAndUpdate(
      { _id: req.user?._id },
      {
        $unset: { token: 1 },
      },
      { new: true }
    );
    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
    }
    return res
      .status(200)
      .clearCookie("token",options)
      .json({ message: "Loggout successfully." });
  } catch (error) {
    return res.status(400).json({ message: "Error: " + error.message });
  }
};

export { login, vote, logout };
