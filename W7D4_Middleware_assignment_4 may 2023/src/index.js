const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://priyankakri8893:8DX39VAJBvKPQmX0@priyankakumari.uvh8zli.mongodb.net/priyanka", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("I am global middleware");
        next();
  }
  );

const assMW = function(req, res, next) {
    const currentDate = new Date();
    const datetime = currentDate.getFullYear()+"-"+ (currentDate.getMonth() + 1)+ "-" +
       currentDate.getDate()
       + "  " +
      currentDate.getHours() + "h:" +
      currentDate.getMinutes() + "min:" +
      currentDate.getSeconds() + "sec";
    const ip = req.ip;
    const url = req.originalUrl;
    console.log(`${datetime} ${ip} ${url}`);
    next();
  }
  
app.use(assMW);
  

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
