import User from "../models/usermodel.js";

export const createdata = async (req, res) => {
  try {
    const { name, city, age } = req.body;

    const user = new User({ name, city, age });

    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getdata = async (req, res) => {
  try {
    const item = await User.find();
    res.status(200).json({ item });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatedata = async (req, res) => {
  try {
    const id = req.params.id;

    const item = await User.findByIdAndUpdate(id);
    res.status(200).json({ item });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletedata = async (req, res) => {
  try {
    const id = req.params.id;

    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
