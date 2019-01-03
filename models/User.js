const mongoose = require("mongoose");
const Schema = mongoose.Schema; // {Schema} = mongoose

const UserSchema = new Schema({
  googleID: {
    type: String,
    required: true
  }
});

mongoose.model("users", UserSchema);
