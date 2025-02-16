const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/login");

connect
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    console.log("Error Connecting Database");
  });

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;
