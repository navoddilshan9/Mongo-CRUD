const { Decimal128 } = require("bson");
const mongoose = require("mongoose");


const item = new mongoose.Schema({

    name: {
        type: String,
    },
    price: {
        type: Decimal128,
    },
    description: {
        type: String,
    },
    qty: {
        type: Number,
    },
    category: {
        type: String,
    },
    seller_id: {
        type: String,
    },
    image: {
        type: String,
    }

}

);


module.exports = Item = mongoose.model('items', item);