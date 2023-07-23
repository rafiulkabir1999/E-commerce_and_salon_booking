const express  = require('express')
const Router = express.Router();
const {allReserve, booking } = require("../controller/booking/index.js")


//booking
Router.get('/reserve',allReserve)
Router.post('/reserve',booking)

module.exports = Router