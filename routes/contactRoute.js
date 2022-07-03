const express = require("express");
const router = express.Router();
const Contact = require("../models/contactModel");

router.post("/contactus", async (req, res) => {
    try {
      const newcontact = new Contact(req.body);
      await newcontact.save();
      res.send("Thanks for Contacting Us");
    } catch (error) {
      return res.status(400).json(error);
    }
  });

  module.exports = router;