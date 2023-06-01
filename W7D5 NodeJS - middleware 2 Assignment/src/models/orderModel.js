const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema(
    {   userId: {
        type: ObjectId,
        ref: "User1"
        },
        productId: {
        type: ObjectId,
        ref: "Product"
        },
        amount: {
            type: Number,
            required: true
        },
        isFreeAppUser: Boolean, 
        date: String
    }, {timestamps: true}
)

module.exports= mongoose.model("Order", orderSchema);