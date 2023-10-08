const express = require('express')
const router = express.Router()
const Controller = require('../Controllers/UserControllers')




router.post('/register', Controller.addUser) 
router.post('/login', Controller.login) 
router.post('/send_otp', Controller.sendOpt) 
router.post('/verify_otp', Controller.verifyOtpAndChangePassword) 
router.get('/get-all-products', Controller.getAllProducts) 





module.exports = router