const productModel = require("../models/productModel")

const createProduct= async (req, res) => {
    let data= req.body
    let savedData= await productModel.create(data)
    res.send(savedData)
}


module.exports= {createProduct}