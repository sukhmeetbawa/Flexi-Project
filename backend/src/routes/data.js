import express from "express";
import mongoose from "mongoose";
import { DataModel } from "../models/Data.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  const user = new DataModel({
    userName: req.body.userName,
    strokeStatus: req.body.strokeStatus,
  });
  console.log(user);
  try {
    //await user.save();
    DataModel.insertMany(user)
      .then(function () {
        console.log("Successfully saved defult items to DB");
      })
      .catch(function (err) {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
});

export { router as dataRouter };