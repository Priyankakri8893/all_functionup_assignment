const { count }= require("console");
const BookModel= require("../models/bookModel");
const AuthorModel= require("../models/authorModel");

const createBook = async function(req, res){
    let data= req.body;
    let savedData= await BookModel.create(data);
    res.send(savedData);
}

// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const getBook = async function(req, res){
    let authorId = await AuthorModel.find({author_name:"Chetan Bhagat"}).select({author_id: 1, _id: 0});
    let bookByAuthorId = await BookModel.find(...authorId).select({name: 1, _id: 0});
    res.send(bookByAuthorId);
}
// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)
const findAuthor = async function(req, res){
    let authorId= await BookModel.find({name: "Two states"}).select({author_id: 1, _id: 0});
    let authorName = await AuthorModel.find(...authorId).select({author_name: 1, _id: 0});
    let updateprice= await BookModel.findOneAndUpdate( 
        { name: "Two states"} , 
        { $set: {price:100} },
        { new: true , upsert: true} )
    res.send({author: authorName, Price: updateprice});
}
// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
const findBook = async function(req, res){
    let books = await BookModel.find({ price : { $gte: 50, $lte: 100 }}).select({ author_id :1, _id: 0});
    let authorIds = books.map(book => book.author_id);
    let authors = await AuthorModel.find({ author_id: { $in: authorIds } }).select({ author_id: 1, author_name: 1, _id: 0 });
    res.send(authors);
}

// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG


// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)

module.exports= {createBook, getBook, findAuthor, findBook};