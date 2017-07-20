var express = require('express');
var router = express.Router();
var _ = require('lodash');
var helper = require('../helper');

/* Making request */
var https = require('https');

router.get('/:page?', function(req, res, next) {
  // console.log(req.params.page);
  helper.getTickets(req.params.page, function (returnObject) {
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

router.get('/detail/:id', function(req, res, next) {
  helper.getTicketsDetail(req.params.id, function (returnObject) {
    console.log(returnObject);
    if (returnObject.statusCode == 200) {
      res.render('detail', {
        ticket: returnObject.ticket
      });
    } else {
      res.sendStatus(returnObject.statusCode);
    }
  });
});

module.exports = router;
