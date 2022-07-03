const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
var cors = require('cors')
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");

router.post("/orders", async (req, res) => {
	try {
		const instance = new Razorpay({
			key_id: 'rzp_test_O9AcwiBuJzZpeo',
			key_secret: 'ObX2NTJLOIuXCkYEVkGYYTcF',

		});

		const options = {
			amount: req.body.amount ,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};


		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});

router.post("/verify", async (req, res) => {
	
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", 'ObX2NTJLOIuXCkYEVkGYYTcF')
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
		res.send("Payment Successful ");
		} else {
			return res.status(400).json({ message: "Invalid signature sent!" });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});


router.post("/bookcar", async (req, res) => {
  const { token } = req.body;
  try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", 'ObX2NTJLOIuXCkYEVkGYYTcF')
			.update(sign.toString())
			.digest("hex");
  
  
    if (razorpay_signature === expectedSign) {
      req.body.transactionId=razorpay_payment_id;
      const newbooking = new Booking(req.body);
      await newbooking.save();
      const car = await Car.findOne({ _id: req.body.car });
      console.log(req.body.car);
      car.bookedTimeSlots.push(req.body.bookedTimeSlots);
      await car.save();
      res.send("Your booking is successfull");
    } else {
      return res.status(400).json(error);
    }}
    catch (error) {
      res.status(500).json({ message: "Internal Server Error!" });
      console.log(error);
    }
});


router.get("/getallbookings", async(req, res) => {

    try {
        const bookings = await Booking.find().populate('car')
        res.send(bookings)
        
    } catch (error) {
        return res.status(400).json(error);
    }
  
});


module.exports = router;
