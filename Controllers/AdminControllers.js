
const ProductSchema = require('../Schemas/Products')


exports.AddProducts = (req,res)=>{
 const {name , price , discount , description  , image , category , brand} =  req.body


 ProductSchema.insertMany({name : name , category : category , brand : brand,  price : price , discount : discount , description :  description , image : image}).then((result)=>{
    if(result.length >  0)
    {
        res.status(200).send({status : 200 , message : "Product Added Successfully :)"})
    }
    else
    {
        res.status(400).send({status : 400 , message : "Filed to add Product || Please Try Again ):"})

    }
 }).catch((err)=>{
    console.log(err)
    res.status(500).send({status : 500 , message : "Something Went wrong || Please Try Again ):"})

 })




}

