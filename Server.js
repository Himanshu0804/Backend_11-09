const express = require('express')
const app  =  express()
const PORT   = 8123
const bodyParser = require('body-parser')
const MyRoutes = require('./Routes/UserRoute')
const AdminRoutes = require('./Routes/AdminRoutes')
const db = require('./DB/Db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use('/' , MyRoutes)
app.use('/' ,  AdminRoutes)












app.listen(PORT ,  ()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})
