var Item = require("../models/item");


module.exports.createItem = function (newItem, callback) {
    console.log("Create Item");
    
  
  const item = new Item(newItem);
  
    // const a1 = await user.save();
    console.log(newItem);
    // res.json(a1);
    item.save()
    .then((item) => {
        callback(null, item);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.updateItem = function (id,newItem, callback) {
    console.log("Update item");
    
    Item.findOneAndUpdate({_id :id}, newItem)
    .then((item) => {
        callback(null, item);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.deleteItem = function (id, callback) {
    console.log("Delete item");
    
    Item.findByIdAndRemove(id)
    .then((item) => {
        callback(null, item);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findAllItem = function (callback) {
    console.log("find All item");
    
    Item.find()
    .then((item) => {
        callback(null, item);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findOneItem = function (id, callback) {
    console.log("find One item");
    
    Item.findById(id)
    .then((item) => {
        callback(null, item);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findAllItemBySeller = function (id, callback) {
    console.log("find One item");
    
    Item.find({
      'seller_id': id
    })
    .then((item) => {
        callback(null, item);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findAllItemByCategory = function (category, callback) {
    console.log("find One item");
    console.log("category: " + category);
    Item.find({
      'category': category
    })
    .then((item) => {
        callback(null, item);
      })
      .catch((err) => {
        callback(err);
      }); 
  };