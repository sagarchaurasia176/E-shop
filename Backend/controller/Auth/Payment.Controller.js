const razorpay = require("razorpay");
const RazorpayInstance = require("../../config/Razorpay");
const uuid = require("uuid");

// when the users click to the order
const OrderController = async (req, res) => {
  try {
    const option = {
      amount: req.body.amount * 100,
      currency: "USD",
      receipt: crypto.randomUUID(),
    };

    RazorpayInstance.orders.create(option, (er, order) => {
      if (er) {
        res.json({
          message: "error while create ordered instance",
          success: false,
        });
        res.status(200).json({
          data: order,
          success: "order created ",
        });
      }
    });




  } catch (er) {
    res.status(404).json({
      message: "order creation failed",
      success: false,
    });
  }
};

module.exports = {
  OrderController,
};
