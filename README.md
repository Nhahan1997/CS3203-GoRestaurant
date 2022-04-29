# Introduction: 
 `GoRestaurant is a software project that help student practice to create the software based on these knowlegde from lecture through 10 chapters and 3 homework. The goal of our project is project vision: "FOR any kind of restaurant WHO would like to utilize the technologies in the 4.0 generation to expand their network, sell the food more widely, and reach out more customers, GoRestaurant is a Web-based service THAT helps restaurants create their own mobile app for ordering food online or making table reservations. Unlike other services, OUR product aims to produce a mobile app that gives a great experience of convenience for restaurant and their customers and create a friendly environment between them. Since we can not create a mobile app, we would create a webpage for restaurants instead. After finishing this project, we learn a lot of knowledge how to create a software with 2 main tasks: frontend and backend`
# Technology:
   
* Node.js
* RESTful APIs
* EJS
* CSS
* jQuery
* Ajax
* MongoDB

# To Installation in local
 `You need to have installed Node.js, NPM, MongoDB and dotenv in your System`
# To Install
` npm install express generator  mongoose passport dotenv`
`P/s may need add more install`


# Run
`node server.js`

# Front_End: 


  `Design these websites to display all data about all information we need for restaurant.We also create 6 buttons on menu bar. Thus, 3 buttons are using for 3 apps: menu app, reservation app, order app and 2 buttons for login and contact. We also use css for html and scripts file with AJAX jquery.`
   * For ejs files: buildapp.ejs, contact.ejs, cratemenu.ejs, createReservation.ejs, home.ejs, login.ejs, order.ejs, register.ejs, reservation.ejs.
   * For css files: style.css, stylebuildapp.css, stylecontact.css, stylecreatemenu.css, styleCreateReservation.css, stylefeedback.css, styleOrder.css, stleReservation.css
   * For scripts files: script.js, script1.js, scripts2.js, script3.js, script4.js.
   * For the home page layout, we got the idea from Easy Tutorials on YouTube [1].

 `The sample of structure from these website: HOMEPAGE using EJS`
```js
<!DOCTYPE html>
<html>
<head>                               
 <tiltle>   GoRestaurant software </tiltle>

 <link rel="stylesheet" href="stylehome.css">

</head>

<body>
    <div class="banner0">
        <div class="banner1">
            <img src="/images/logo.png" width="100" alt="">
             <ul>
                <li> <a href="/login"> Login</a>

                 <li><a href="/buildapp">Menu_App</a>
                
                    <li><a href="/reservation">Reservation_App</a>
                        <li><a href="/order">Order_App</a>
                        <li><a href="/contact">Contact</a>
                 
             </ul>
        </div>
       <div class="content">
    <h1> DESIGN YOUR SOFTWARE </h1>
    </div>
</body>
 </html>
```
`ALSO example of Style using CSS simple`
```JS
*{
    margin:20;
    padding:20;
    font-family: sans-serif;
}
body{
    background-image:linear-gradient(rgba(0, 2, 0, 0.664),rgba(1, 0, 1, 0.527)),url("./images/imageMenu3.jpg");
    background-color: aqua;
    text-align: left;
    color:whitesmoke;
    font-size-adjust: inherit;
}
.th1{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
```
`Example of the Script.js for the Menus`
```js
$(function(){
   
      $.ajax({                               //using ajax to write code
        url: '/createmenu/menus',               //access url data stored in serever
        contentType: 'application/json',     //type of json
        success: function(response){         //when suceess that function below is append these field and button in web
          console.log(response);
          var body=$('body');             //using tbody to append
          body.html('');
          body.append('MENU TODAY');
         // body.append('Number           Name               Price                 Kind') ;
          response.menus.forEach(function(menus){          
            body.append('\
            <h1>' +menus.id+'.    '+menus.name    +'..........  $'+menus.price        + '..........    '   +menus.kind+ '</h1>\
                  ');
          });   
        }
      });
    });
```



# Back_End: 
  ## Using mongodb and file for data via REST FUL API Node js:
   * server.js
   * app.js,
   * user.js

 
## Create server.js Requests to the path
   * Using app. get() function routes the HTTP GET Requests to the path which is being specified with the specified callback functions.
   * UsingreadFile function to readfile
   * Using The app.post() function routes the HTTP POST requests to the specified path with the specified callback functions.
   * Using The app.put() function routes the HTTP PUT requests to the specified path with the specified callback functions.   
   * Using app.delete() function to delete.
   * The login/register and check Authenticated is a open-source from DWRCS YouTube channel [2].
```js
app.get("/index", checkAuthenticated, (req, res) => {       
  res.render("index", { name: req.user.name });
});

app.get("/register", checkNotAuthenticated, (req, res) => { 
  res.render("register");
});

app.get("/login", checkNotAuthenticated, (req, res) => { 
});
app.get("/", checkNotAuthenticated, (req, res) => {
  res.render("home");                               
});
```
```js
fs.readFile('menu.json','utf8',function(err,data){     
  if(err) throw err;                                  
  let readData=JSON.parse(data);                         
  for(const eachItem of readData){                    
    menus[k]={                       
      id:eachItem.id,                            
      name:eachItem.name,                         
      price:eachItem.price,                       
      kind:eachItem.kind,                        
  }
  k=k+1;                                                
  console.log(menus)                         
  }   
})
```
```js 
app.post('/buildapp/menus',function(req,res){
  var textmenuName=req.body.name;     //using body parser to get text data on scripts input and story via assign3text
  var idforMenu=req.body.id;    //using body parse to get user_ID input on scripts file
  //var newPrice=req.body.
  var newprice=req.body.price;
  var newkind=req.body.kind;
  
                   
   menus.push({               //push these data on server
     id:idforMenu,              //push id for menus
     name:textmenuName,          //push name for menus
     price:newprice,              //push price for menus
     kind:newkind,         //push kind for menus
  });
  res.send('successfully created');
})
```
```js
app.put('/buildapp/menus/:id',function(req,res){   
  var id=req.params.id;                         //wrap id 
  var newname=req.body.name;      //wrap newname that input and store name
  var newprice=req.body.price;     //wrap newprice that input and store price
  var newkind=req.body.kind;        //wrap newkind that input and store new kind
  var found=false;                          
 
  
 menus.forEach(function(menu,index){   //loop all items
  if(!found&&menu.id==Number(id)){                   
     menu.name=newname;                        //found name and new name
     menu.price=newprice;                      //found price and new price
     menu.kind=newkind;                        //found kind and new kind
  }
})


     res.send('successfully updated data');   //message display when successfully updated
})

```
```js 
app.delete('/buildapp/menus/:id',function(req,res){
  var id=req.params.id;                        //wrap id for deleting
  var found=false;
  menus.forEach(function(menu,index){ //loop menu by id
     if(!found&&menu.id==Number(id)){
          menus.splice(index,1);
     }
  })

  res.send('successfully deleted product');
})
```

## Create app.js to call file in the folder specific. 
```js
var createError = require('http-errors');                  
var express = require('express');                          
var path = require('path');                                
var cookieParser = require('cookie-parser');              
var logger = require('morgan');                            
var indexRouter = require('./routes/index');              
var usersRouter = require('./routes/users');               
var app = express();   
  ```

## Create user.js to get create in the mongodb

```js
const mongoose = require("mongoose");               //create mongoose

const userSchema = new mongoose.Schema({           //using mongoose Schema
  name: {
    type: String,                                   //type string for input name
    required: true,                                 //check true for parameter
  },
  email: {                                                   
    type: String,                                   //type string for input email
    required: true,                                 //check true for parameter
  },
  password: {
    type: String,                                   //type string for in put password
    required: true,                                 //check true for parameter
  },
  

});

const User = mongoose.model("User", userSchema);      //create User 
module.exports = User;                                //export module
```


# Code is Running on
+ http://localhost:3000/

# Reference
* [1] Easy Tutorials, "How to Make Website Using HTML And CSS | Website Design With HTML And CSS, https://www.youtube.com/watch?v=PgAZ8KzfhO8

* [2] DWRCS, "Building Login and Register system with NodeJS, MongoDB and EJS, https://www.youtube.com/watch?v=qTH0M4pKNZg
