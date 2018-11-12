// ====================================
//      Dependencies
// ====================================

const bodyParser = require("body-parser")
const logger = require("morgan")
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

// let sampleData = require("./data/sample_database_result.js")
// sampleData= sampleData();

let sampleData2= require("./data/sample_database_result.json")
console.log("-----------------------------")
console.log(sampleData2);
console.log("-----------------------------")

// sampleData2 = JSON.parse(sampleData2);


// Controller Dependencies


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Required Model
const MongoExample = require("./models/MongoExample.js");

// Initialize Express
const app = express();
// Set the port to use as a variable.
const port = process.env.PORT || 4000;


// Sets up the main handlebars page (main.hbs) to serve our web apps pages
// Sets the viewing engine of the app to handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Use body-parser and morgan with the app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(logger("dev"));

// ====================================
//      Database Setup with Mongoose
// ====================================

// Database configuration with mongoose
//mongoose.connect("mongodb://heroku_086slhkf:t96inaqlc3krouapt7t4uvf6rd@ds139984.mlab.com:39984/heroku_086slhkf")
//mongoose.connect('mongodb://localhost/scraper');
let connectionURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/DBHERE'


// sets timers to limit how long the server attempts to establish a connection to a db
var option = {
  server: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  }
};

mongoose.connect(connectionURI, option);
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function () {
  console.log("Mongoose connection successful.");
});


// set the app to listen for a server connection
app.listen(port, function () {
  console.log('App listening on port ' + port)
});

// ====================================
//      Routing
// ====================================

// Homepage Route
app.get('/', function (req, res) {
  //console.log("Test for sample data import:" + JSON.stringify(sampleData.attrs[0],null,2));
  let hbsObject = {
    title: "Homepage - Michael Kallgren",
    homepage: 'active',
    data: JSON.stringify(sampleData2),
    results: res
  }
  //console.log("hbsObj for rendering: " + JSON.stringify(hbsObject), null, 2);
  res.render("homepage.handlebars", hbsObject);
});

//Other routes, defined in routes folder
require("./routes/routes.js")(app);


// Leaving this in as an example of how to communicate with a database
//Contact-Page Route
// app.get('/contact', function (req, res) {
//   Code.find({})
//     // Now, execute the rest of the query
//     .exec(function (error, result) {
//       // Log any errors
//       if (error) {
//         console.log(error);
//       }
//       // Or send the doc to the browser as a json object
//       else {
//         let hbsObject = {
//           title: "Contact - Michael Kallgren",
//           contact: 'active',
//           results: result
//         }
//         console.log("hbsObj for rendering: " + JSON.stringify(hbsObject, null, 2));
//         res.render("contact.handlebars", hbsObject);
//       }
//     });

// });


//+++++++++++++++++++++++++++++++++++++++++++++++++

// ====================================
//      Misc
// ====================================
