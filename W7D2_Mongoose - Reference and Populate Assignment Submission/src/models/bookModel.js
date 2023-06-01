const mongoose = require("mongoose");
const Objectid = mongoose.Schema.Types.ObjectId

const bookSchema= new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
		author_Id:{
            type: Objectid,
            ref: "Author1",
            required: true,
            validate: {
                validator: async function(value) {
                    const publisher = await mongoose.model("Author1").findById(value);
                    return publisher !== null;
                },
                message: "Author is not present"
            }
        },
        price: Number,
		ratings: Number,
		publisher_Id: {
            type: Objectid,
            ref: "Publisher1",
            required: true,
            validate: {
                validator: async function(value) {
                    const publisher = await mongoose.model("Publisher1").findById(value);
                    return publisher !== null;
                },
                message: 'Publisher is not present'
            }
        }
    }
    , {timestamps: true});

module.exports = mongoose.model('Book1', bookSchema);