var express = require('express');

//create our App
var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


app.use(function(req, res, next){
   if(req.headers['x-forwarded-proto'] === 'https') {
       res.redirect('http://'+ req.hostname + req.url );
   }else{
       next();
   }
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.use(express.static('public'));

app.listen(PORT, function(){
    console.log('express server is up on port '+PORT);
});
