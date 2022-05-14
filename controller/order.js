var Order = require("../models/order");

module.exports.createOrder = function (newOrder, callback) {
    console.log("Create Order");
    
  
  const order = new Order(newOrder);
  
    // const a1 = await user.save();
    console.log(newOrder);
    // res.json(a1);
    order.save()
    .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.updateOrder = function (id,newOrder, callback) {
    console.log("Update Order");
    
    Order.findOneAndUpdate({_id :id}, newOrder)
    .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.deleteOrder = function (id, callback) {
    console.log("Delete Order");
    
    Order.findByIdAndRemove(id)
    .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findAllOrder = function (callback) {
    console.log("find All order");
    
    Order.find()
    .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findOneOrder = function (id, callback) {
    console.log("find One order");
    
    Order.findById(id)
    .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findAllOrderBySeller = function (id, callback) {
    console.log("find One Order");
    
    Order.find({
      'seller_id': id
    })
    .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findAllOrderByCustomer = function (customer, callback) {
    console.log("find One Order");
    Order.find({
      'customer_id': customer
    })
    .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

//   module.exports.findAllOrderByDateAndSID = function (SID, sdate, edate, callback) {
//     var sDate = new Date(sdate);
//     var eDate = new Date(edate);
//     console.log("find One Order");
//     console.log("Date : "+ sDate.toISOString());
//     Order.find({
//       'seller_id': SID,
//       'order_date': {
//         $gte:sDate.toISOString(),
//         $lt: eDate.toISOString()
//       }
//     })
//     .then((order) => {
//         callback(null, order);
//       })
//       .catch((err) => {
//         callback(err);
//       }); 
//   };

  module.exports.findAllOrderByDateAndCID = function (CID, sdate, edate, callback) {
    var sDate = new Date(sdate);
    var eDate = new Date(edate);
    console.log("find One Order");
    console.log("Date : "+ sDate.toISOString());
    Order.find({
      'customer_id': CID,
      'order_date': {
        $gte:sDate.toISOString(),
        $lt: eDate.toISOString()
      }
    })
    .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err);
      }); 
  };