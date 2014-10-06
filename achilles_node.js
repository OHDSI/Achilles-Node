// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var rio = require("rio");
var app        = express();

// configure app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 3000; // set our port


// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	
var args = {
    dbms: req.query.dbms,
    cdm_schema: req.query.cdm_schema,
    results_schema: req.query.results_schema,
    source_dataset: req.query.source_dataset,	
    analyses: req.query.analyses
};

function displayResponse(err,result) {
 // check error, validate input, etc.
 result = JSON.parse(result);
 console.log(result);
 res.send(result);

}

options = {
 entryPoint: "testAchilles",
 data: args,
 callback: displayResponse
}

// change directory in string below to point to wherever you create the above .R file
rio.sourceAndEval("/PATH_TO_THIS_DIRECTORY/Achilles-Node.R",options);

});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.post('/', function(req, res) {

var args = {
    dbms: req.body.dbms,
    cdm_schema: req.body.cdm_schema,
    results_schema: req.body.results_schema,
    source_dataset: req.body.source_dataset,	
    analyses: req.body.analyses
};

function displayResponse(err,result) {
 // check error, validate input, etc.
 result = JSON.parse(result);
 console.log(result);
 res.json(result);

}

options = {
 entryPoint: "testAchilles",
 data: args,
 callback: displayResponse
}

// change directory in string below to point to wherever you create the above .R file
rio.sourceAndEval("/PATH_TO_THIS_DIRECTORY/Achilles-Node.R",options);
	
});

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
