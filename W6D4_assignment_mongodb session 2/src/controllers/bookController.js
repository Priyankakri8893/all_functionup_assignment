const { count } = require("console")
const BookModel= require("../models/bookModel")
const bookModel = require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res){
    // const getAllBooks = await bookModel.find() 
    // res.send(getAllBooks)

// bookList : gives all the books- their bookName and authorName only 
// const bookList = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0} )
// res.send(bookList)

// getBooksInYear: takes year as input in post request and gives list of all books published that year
// const getBooksInYear = await bookModel.find({  year: 2021 })
// res.send(getBooksInYear)

// getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
// e.g if body had { name: “hi”} then you would fetch the books with this name
// if body had { year: 2020} then you would fetch the books in this year
// hence the condition will differ based on what you input in the request body
// const getParticularBooks = await bookModel.find({authorName : "Paulo Coelho" })
// res.send(getParticularBooks)

// getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
const getXINRBooks = await bookModel.find({'prices.indianPrice' : { $in: 
    ['100INR', '200INR', '500INR'] }})
res.send(getXINRBooks)

// getRandomBooks - returns books that are available in stock or have more than 500 pages
// const getRandomBooks = await bookModel.find({
//     $or: [{stockAvailable: true}, {totalPages: {$gt: 500}}]
// })
// res.send(getRandomBooks) 
}

module.exports={createBook, getBooksData};