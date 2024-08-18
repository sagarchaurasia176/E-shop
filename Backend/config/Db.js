const mongoose = require("mongoose");
require("dotenv").config();

const connectWithMongoDB = () => {
  mongoose
    .connect(process.env.Db_Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Databse connected succefully!");
    })
    .catch((er) => {
      console.log("Databse not connected succesfully!");
      console.error(er);
    });
};
module.exports = connectWithMongoDB;
