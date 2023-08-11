let server = require('../server');
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);
//FIXME: package.json migrations runing before

describe('User', () => {
	describe('POST /the user signup', () => {
		let user = {
			name: 'Noev',
			email: 'brunoblaise@gmail.com',
			hash: '112235678989',
		};
		it('It should signup the user', (done) => {
			chai
				.request(server)
				.post('/api/v1/auth/signup')
				.send(user)
				.end((err, res) => {
					user.should.exist;
					res.should.have.status(201);
					res.should.have.be.an('object');
					res.body.should.have.keys('STATUS', 'data', 'msg', 'time');
					console.log(err);
				});
			done();
		});
	});

	describe('POST /the user login', () => {
		let user = {
			email: 'brunoblaise@gmail.com',
			password: '112235678989',
		};
		it('It should login the user', (done) => {
			chai
				.request(server)
				.post('/api/v1/auth/login')
				.send(user)
				.end((err, res) => {
					user.should.exist;
					res.should.have.status(200);
					res.should.have.be.an('object');
					res.body.should.have.keys('STATUS', 'token', 'msg', 'time');
				});
			done();
		});
	});
});

describe('Pizza', () => {
	describe('view Pizza', () => {
		it('GET pizza', (done) => {
			chai
				.request(server)
				.get('/api/v1/pizza/view?page=1&&limit=10')
				.end((err, res) => {
					res.should.have.status(400);
					//res.body.have.keys('STATUS', 'data', 'time');
				});
			done();
		});
	});
});

//TODO: authentication
