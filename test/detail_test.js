'use strict';

let chai = require ('chai');
let chaiHttp = require ('chai-http');
let should = chai.should();
let server = require('../app');

chai.use(chaiHttp);

describe('/GET', () => {
    it('Ticket ID found', (done) => {
        chai.request(server)
            .get('/detail/5')
            .end((err, res) => {
               res.should.have.status(200);
                done();
            });
    })

});
