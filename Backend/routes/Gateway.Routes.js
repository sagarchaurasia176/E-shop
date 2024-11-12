const express = require('express')
const { OrderController } = require('../controller/Auth/Payment.Controller')
const Gatewayrouter = express.Router()

Gatewayrouter.post('/api/order/created',OrderController);


module.exports = Gatewayrouter