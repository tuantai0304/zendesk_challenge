var express = require('express');
var router = express.Router();

var _ = require('lodash');

/* Making request */
var querystring = require('querystring');
var https = require('https');

var per_page = 25;

var options = {
  host: 'webmobit.zendesk.com',
  // username: 'tuantai0304@gmail.com',
  // password: 'Kingheomap@123',
  path: '/api/v2/tickets/',
  method: 'GET',
  auth: 'tuantai0304@gmail.com' + ':' + 'Kingheomap@123',
  headers: {
    'Content-Type': 'application/json'
  }
};


/* GET home page. */
router.get('/:id', function(req, res, next) {

  // console.log(req.params.page);
  options.path += req.params.id + '.json';

  console.log(options);

  var https_request = https.request(options, function(response, error) {
    console.log('Status ' + response.statusCode);

    if (response.statusCode !== 200) {
      res.status(response.statusCode);
    } else {
      res.status(200);
    }

    response.setEncoding('utf-8');
    var responseString = '';

    response.on('data', function(data) {
      responseString += data;
      // console.log(responseString)
    });

    response.on('end', function() {
      var responseObject = JSON.parse(responseString);

      res.render('detail', {
        ticket: responseObject.ticket,
        error: null,
        path: req.path
      });

      response.on('error', function () {

      });
    });
  });

  https_request.end();



});

module.exports = router;
