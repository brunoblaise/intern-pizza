let server = require('../server');
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);

describe('Test', () => {
	describe('GET /', () => {
		it('It should GET the home page', (done) => {
			chai
				.request(server)
				.get('/api/v1/pizza/view')
				.end((err, res) => {
					res.should.have.status(200);
					done();
				});
		});
	});
});
