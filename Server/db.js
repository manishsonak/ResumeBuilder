/* eslint-disable no-undef */


// eslint-disable-next-line no-undef
const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/ResumeBuilder?directConnection=true";

// mongoose.set('strictQuery', true);

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to mongo successfully");
  } catch (error) {
    console.error("Error connecting to mongo:", error.message);
  }
}

module.exports = connectToMongo;