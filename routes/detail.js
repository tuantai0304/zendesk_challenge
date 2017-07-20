var express = require('express');
var router = express.Router();
var config = require('../config');

/* Making request */
var https = require('https');

router.get('/:id', function(req, res, next) {
  config.helper.getTicketsDetail(req.params.id, function (returnObject) {
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
