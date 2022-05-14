const bcrypt = require("bcryptjs");
const saltRounds = 5;
var User = require("../models/user");



module.exports.createUser = function (newUser, callback) {
  console.log("Create user");
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      const user = new User(newUser);
      // const a1 = await user.save();
      console.log(newUser);
      // res.json(a1);
      user.save()
        .then((user) => {
          callback(null, user);
        })
        .catch((err) => {
          callback(err);
        });
    });
  });
};

module.exports.updateUser = function (id, newUser, callback) {
  console.log("Update user");

  User.findOneAndUpdate({ _id: id }, newUser)
    .then((user) => {
      callback(null, user);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.deleteUser = function (id, callback) {
  console.log("Delete user");

  User.findByIdAndRemove(id)
    .then((user) => {
      callback(null, user);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.findAllUser = function (callback) {
  console.log("find All user");

  User.find()
    .then((user) => {
      callback(null, user);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.findOneUser = function (id, callback) {
  console.log("find One user");

  User.findById(id)
    .then((user) => {
      callback(null, user);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.verifyUser = function (email,password, callback) {
  console.log("find One email");
  
  User.findOne({
    'email': email
  })
  .then((user) => {
      // callback(null, user);
          // password = hash;
          console.log("userDetailes");
          console.log(user);
          console.log("user.password "+user.password);
          console.log("password "+password);
          bcrypt.compare(password, user.password, function(err, result) {
            // result == true
            console.log(result);
            if(result){
              callback(null, user);
            }else{
              callback(new Error("Credentials Does Not Matched"));
            }
        });
    })
    .catch((err) => {
      callback(err);
    }); 
};