const express = require("express");
const router = express.Router();
const Buy = require("../models/buyModel")

router.post("/buycar", async (req, res) => {
    try {
      const newbuy = new Buy(req.body);
      await newbuy.save();
      res.send("Your car has been booked successfully ");
    } catch (error) {
      return res.status(400).json(error);
    }
  });

  module.exports = router;