const express = require("express");
const router = express.Router();
const Sell = require("../models/sellModel")

router.post("/sellcar", async (req, res) => {
    try {
      const newsell = new Sell(req.body);
      await newsell.save();
      res.send("Your car Details have been submitted ");
    } catch (error) {
      return res.status(400).json(error);
    }
  });

  module.exports = router;