const mongoose = require("mongoose");


const user = new mongoose.Schema({
    
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    nic: {
      type: String,
      unique:true
    },
    gender: {
      type: String,
    },
    password: {
      type: String,
    },
    type: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    province: {
      type: String,
    },
    email: {
      type: String,
      unique:true
    },
    contactNo: {
      type: String,
    },
    cart_id: {
      type: String,
    }
  }
    
);


module.exports = User = mongoose.model('users', user);
