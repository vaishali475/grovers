const express=require("express");
const bodyParser= require("body-parser");
const ejs= require("ejs");
const mongoose=require("mongoose");
const md5=require("md5");


const app=express();



app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/Users",{ useNewUrlParser: true,useUnifiedTopology: true });

const schema=  {
    email:String,
    password:String
  };




  const Customer=mongoose.model("Customer",schema);



app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/menu",function(req,res){
  res.render("menu");
});

app.get("/Ordernow",function(req,res){
  res.render("Ordernow");
});

app.get("/contact",function(req,res){
  res.render("contact");
});

app.get("/dessert",function(req,res){
  res.render("dessert");
});

app.get("/slices",function(req,res){
  res.render("slices");
});

app.get("/starters",function(req,res){
  res.render("starters");
});

app.get("/mainCourse",function(req,res){
  res.render("mainCourse");
});
app.get("/beverages",function(req,res){
  res.render("beverages");
});

app.get("/cart",function(req,res){
  res.render("cart");
});





app.get("/signup",function(req,res){
  res.render("signup");
});

app.post("/signup",function(req,res){
  const newCustomer=new Customer({
    email:req.body.username,
 password: md5(req.body.password)
  });



newCustomer.save(function(err){
      if(err){
        console.log(err);
      } else{
        res.render("menu");
      }

    });
});

app.listen(3000, function() {
  console.log("Server has started successfully");
});
