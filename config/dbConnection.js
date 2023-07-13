const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_DB_CONNECTION_STRING,
      {
        useNewUrlParser: true, // enables the new URL parser of MongoDB's driver.
        useUnifiedTopology: true, // enables the new server discovery and monitoring engine of MongoDB's driver.
    
      }
    );
    console.log(
      "DB Connected",
      connection.connection.host,
      connection.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;