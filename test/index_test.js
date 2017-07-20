'use strict';

let chai = require ('chai');
let chaiHttp = require ('chai-http');
let should = chai.should();
let server = require('../app');

chai.use(chaiHttp);

describe('/GET', () => {
    it('View first 25 tickets', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
               res.should.have.status(200);
                if (err) throw err;
                done();
            });
    })

});
