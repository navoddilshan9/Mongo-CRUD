const express = require("express");
// const multer = require("multer");
const ejs = require("ejs");

// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function(req,file,cb){
//     cb(null, file.fieldname + '-' + Date.now() + 
//     path.extname(file.originalname));
//   }
// });

const app = express();
// app.set('view engine', 'ejs');
app.use('/uploads',express.static('uploads'));
const port = process.env.PORT || 5000;
// var passport = require("passport");


//Database
var connectDB = require("./config/database");

//Test Database
connectDB();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

var api = require("./routes/api");
var auth = require("./routes/auth");
// app.use(passport.initialize());
// app.use(passport.session());
// passportJWTInit();




app.use("/api", api);
app.use("/auth", auth);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
