/**
 * Created by TuanTai on 20/07/2017.
 */

var https = require('https');

var config = {
    host: 'webmobit.zendesk.com',
    method: 'GET',
    auth: 'tuantai0304@gmail.com' + ':' + 'Kingheomap@123',
    headers: {
        'Content-Type': 'application/json'
    },
    per_page: 25,
};

var helper = {
    getTickets: function (page, callback) {
        var returnObject = {};

        var options = Object.assign({}, config);
        options.path = "/api/v2/tickets/?per_page=25&page=" + page;
        console.log(options.path);

        var request = https.request(options, function(response, error) {
            console.log('Status ' + response.statusCode);

            response.setEncoding('utf-8');
            var responseString = '';

            // if (response.statusCode == 200) {

            response.on('data', function(data) {
                responseString += data;
            });

            response.on('end', function() {
                // console.log(responseString);
                if (response.statusCode == 200) {
                    var responseObject = JSON.parse(responseString);
                    var tickets = responseObject.tickets;
                    var number_pages = Math.ceil(responseObject.count / options.per_page);

                    console.log("Number of page " + number_pages);
                    returnObject.tickets = tickets;
                    returnObject.number_pages = number_pages;
                }

                returnObject.statusCode = response.statusCode;

                callback(returnObject);
            });
        });

        request.on('error', function (err) {
            console.log(err.message);
            callback(returnObject);
        });

        request.end();
    },
    getTicketsDetail: function (id, callback) {
        var returnObject = {};

        var options = Object.assign({}, config);
        options.path = "/api/v2/tickets/" + id + '.json';
        console.log(options.path);

        var request = https.request(options, function(response, error) {
            console.log('Status ' + response.statusCode);

            response.setEncoding('utf-8');
            var responseString = '';

            // if (response.statusCode == 200) {

            response.on('data', function(data) {
                responseString += data;
            });

            response.on('end', function() {
                // console.log(responseString);
                if (response.statusCode == 200) {
                    var responseObject = JSON.parse(responseString);

                    returnObject.ticket = responseObject.ticket;
                }

                returnObject.statusCode = response.statusCode;

                callback(returnObject);
            });
        });

        request.on('error', function (err) {
            console.log(err.message);
            callback(returnObject);
        });

        request.end();
    },
};

exports.helper = helper;