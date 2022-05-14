const mongoose = require("mongoose");


const order = new mongoose.Schema({
    
    customer_id: {
      type: String,
    },
    seller_id: {
      type: String,
    },
    order: [
        {
          item_id: {
            type: String,
          },
          qty: {
            type: Number,
          },
  
        }
    ],
    order_date: {
      type: Date,
    },
   
  }
    
);


module.exports = Order = mongoose.model('orders', order);