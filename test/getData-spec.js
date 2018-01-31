const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('complaints', () => {

    describe('/GET data', () => {
      it('it should GET all the data', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
              done();
            });
      });
    });

});
