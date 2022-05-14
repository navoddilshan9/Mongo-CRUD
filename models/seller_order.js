const mongoose = require("mongoose");


const sellerOrder = new mongoose.Schema({

    seller_id: {
        type: String,
    },
    customer_id: {
        type: String,
    },
    item: {
        type: String,
    },
    qty: {
        type: Number,
    },
    isShipped: {
        type: Boolean,
    },
    order_date: {
        type: Date,
      },

}

);


module.exports = SellerOrder = mongoose.model('seller_orders', sellerOrder);