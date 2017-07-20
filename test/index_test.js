'use strict';

var chai = require ('chai');
var chaiHttp = require ('chai-http');
var should = chai.should();
var assert = chai.assert;


var server = require('../app');

var helper = require('../helper');

chai.use(chaiHttp);

describe('Helper method', () => {
   it("Get all tickets", function (done) {
       helper.getTickets(2, function (returnObject) {
          returnObject.should.have.property('tickets');
           assert.equal(returnObject.statusCode, 200);
           done();
       });
   });

    it("Get Ticket detail", function (done) {
        helper.getTicketsDetail(2, function (returnObject) {
            returnObject.should.have.property('ticket');
            assert.equal(returnObject.statusCode, 200);
            done();
        });
    });

    it("A ticket ID not found", function (done) {
        helper.getTicketsDetail(2000, function (returnObject) {
            assert.equal(returnObject.statusCode, 404);
            done();
        });
    });
});
