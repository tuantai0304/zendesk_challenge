var express = require('express');
var router = express.Router();
var _ = require('lodash');
var config = require('../config');

/* Making request */
var https = require('https');

router.get('/:page?', function(req, res, next) {
  // console.log(req.params.page);
  config.helper.getTickets(req.params.page, function (returnObject) {
    console.log(returnObject);
    if (returnObject.statusCode == 200) {
      res.render('index', {
        tickets: returnObject.tickets,
        number_pages: returnObject.number_pages,
        path: req.path
      });
    } else {
      res.sendStatus(returnObject.statusCode);
    }
  });


});

module.exports = router;
