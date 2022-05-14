var SellerOrder = require("../models/seller_order");

module.exports.createSellerOrder = function (newOrder, callback) {
    console.log("Create SellerOrder");
    
  
  const order = new SellerOrder(newOrder);
  
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

  module.exports.updateSellerOrder = function (id,newOrder, callback) {
    console.log("Update SellerOrder");
    
    SellerOrder.findOneAndUpdate({_id :id}, newOrder)
    .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.deleteSellerOrder = function (id, callback) {
    console.log("Delete Order");
    
    SellerOrder.findByIdAndRemove(id)
    .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findAllSellerOrder = function (callback) {
    console.log("find All order");
    
    SellerOrder.find()
    .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findOneSellerOrder = function (id, callback) {
    console.log("find One order");
    
    SellerOrder.findById(id)
    .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findAllSellerOrderBySeller = function (id, callback) {
    console.log("find One Order");
    
    SellerOrder.find({
      'seller_id': id
    })
    .then((order) => {
        callback(null, order);
      })
      .catch((err) => {
        callback(err);
      }); 
  };

  module.exports.findAllSellerOrderByCustomer = function (customer, callback) {
    console.log("find One Order");
    SellerOrder.find({
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

  module.exports.findAllSellerOrderByDateAndSID = function (SID, sdate, edate, callback) {
    var sDate = new Date(sdate);
    var eDate = new Date(edate);
    console.log("find One Order");
    console.log("Date : "+ sDate.toISOString());
    SellerOrder.find({
      'seller_id': SID,
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