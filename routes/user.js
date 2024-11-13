import express from "express";

import {
  createdata,
  getdata,
  updatedata,
  deletedata,
} from "../controllers/usercontroller.js";

const router = express.Router();

router.post("/createdata", createdata);
router.get("/getdata", getdata);
router.put("/updatedata/:id", updatedata);
router.delete("/deletedata/:id", deletedata);

export default router;
