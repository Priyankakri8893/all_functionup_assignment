const BookModel= require("../models/bookModel");
const AuthorModel= require("../models/authorModel");
const publisherModel= require("../models/publisherModel");

const createBook = async function(req, res){
    let data= req.body;
    let savedData= await BookModel.create(data);
    res.send(savedData);
}

const getbooks = async function (req, res){
    let books = await BookModel.find();
    res.send(books);
};

// Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this)

const getdetail = async function (req, res){
    let books = await BookModel.find().populate("publisher_Id").populate("author_Id");
    res.send(books);
};

module.exports = {createBook, getdetail, getbooks};