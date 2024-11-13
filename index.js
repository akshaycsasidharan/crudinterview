import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import userRoutes from "./routes/user.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("the database is successfully connected");
    app.listen(PORT, () => {
      console.log(`the server is running on PORT${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
