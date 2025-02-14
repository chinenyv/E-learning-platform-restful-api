const mongoose = require("mongoose");


const connectDB = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  };

  mongoose
    .connect(process.env.MONGODB_URI, connectionParams)
    .then(() => {
      console.log("✅ Connected to the database");
    })
    .catch((err) => {
      console.error(`❌ Error connecting to the database:\n${err.message}`);
    });
};

module.exports = connectDB;
