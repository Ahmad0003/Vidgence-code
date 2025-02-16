const mongoose = require("mongoose");

const MongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected...");
  } catch (error) {
    console.error("❌ MongoDB Connection Error: ", error.message);
    process.exit(1); // Stop the server if DB fails
  }
};

module.exports = MongoConnection;
