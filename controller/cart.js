var Cart = require("../models/cart");

module.exports.createCart = function (newCart, callback) {
    console.log("Create Cart");
    
  
  const cart = new Cart(newCart);
  
    // const a1 = await user.save();
    console.log(newCart);
    // res.json(a1);
    cart.save()
    .then((cart) => {
        callback(null, cart);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.updateCart = function (id,newCart, callback) {
    console.log("Update Cart");
    
    Cart.findOneAndUpdate({_id :id}, newCart)
    .then((cart) => {
        callback(null, cart);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.updateCartByCID = function (CID,newCart, callback) {
    console.log("Update Cart");
    
    Cart.findOneAndUpdate({"customer_id" :CID}, newCart)
    .then((cart) => {
        callback(null, cart);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.deleteCart = function (id, callback) {
    console.log("Delete Cart");
    
    Cart.findByIdAndRemove(id)
    .then((cart) => {
        callback(null, cart);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findAllCart = function (callback) {
    console.log("find All cart");
    
    Cart.find()
    .then((cart) => {
        callback(null, cart);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findOneCart = function (id, callback) {
    console.log("find One cart");
    
    Cart.findById(id)
    .then((cart) => {
        callback(null, cart);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

 

  module.exports.findCartByCustomer = function (customer, callback) {
    console.log("find One Cart");
    Cart.findOne({
      'customer_id': customer
    })
    .then((cart) => {
        callback(null, cart);
      })
      .catch((err) => {
        callback(err);
      }); 
  };