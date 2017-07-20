var express = require('express');
var router = express.Router();

var _ = require('lodash');

/* Making request */
var querystring = require('querystring');
var https = require('https');
//
// var host = 'www.webmobit.zendesk.com';
// var username = 'tuantai0304@gmail.com';
// var password = 'Kingheomap@123';
// var sessionId = null;
// var deckId = '68DC5A20-EE4F-11E2-A00C-0858C0D5C2ED';
var per_page = 25;

var options = {
  host: 'webmobit.zendesk.com',
  path: '/api/v2/tickets/?per_page=' + per_page,
  method: 'GET',
  auth: 'tuantai0304@gmail.com' + ':' + 'Kingheomap@123',
  headers: {
    'Content-Type': 'application/json'
  }
};


/* GET home page. */
router.get('/:page?', function(req, res, next) {

  // console.log(req.params.page);
  options.path += '&page=' + req.params.page;

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
      // console.log(responseString);
      var title = "Express Hello";
      var responseObject = JSON.parse(responseString);
      var tickets = responseObject.tickets;
      var number_pages = Math.ceil(responseObject.count / per_page);

      console.log("Number of page " + number_pages);
      res.render('index', {
        title: title,
        tickets: tickets,
        number_pages: number_pages,
        error: null,
        path: req.path
      });

      console.log(responseObject[1]);

      response.on('error', function () {

      });

      // _.forEach(responseObject, function (value, key) {
      //   console.log(value);
      // });
      // responseObject.forEach(function (item, index) {
      //     console.log(item);
      // });
      // success(responseObject);
      // console.log(responseObject);
    });
  });

  https_request.end();



});

module.exports = router;
