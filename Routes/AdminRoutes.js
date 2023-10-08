const express = require('express');
const router =  express.Router()
const AdminControllers = require('../Controllers/AdminControllers')


router.post('/add-product' , AdminControllers.AddProducts)



 module.exports  =  router;
