const mongoose = require('mongoose');
// bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false)

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        require: true,
    }, 
    authorName: String, 
    tags: [String],
    totalPages: Number,
    stockAvailable: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {type: Number, default: 2021}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)