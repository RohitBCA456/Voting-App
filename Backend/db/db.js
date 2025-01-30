import mongoose from "mongoose";
const dbConnection = async (req, res) => {
  try {
    const connectionInsatance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log(`connected to database successfully: ${connectionInsatance.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};

export { dbConnection };
