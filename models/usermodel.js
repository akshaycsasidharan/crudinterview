import mongoose from "mongoose";

const usermodel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const User = new mongoose.model("user", usermodel);

export default User;
