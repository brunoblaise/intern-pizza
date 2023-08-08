const request = require('supertest');
const app = require('../../app');
/* const app = require('../../server');
 */
/* describe('Post Endpoints', () => {
	it('should create a new post', async () => {
		const res = await request(app).post('/api/posts').send({
			userId: 1,
			title: 'test is cool',
		});
		expect(res.statusCode).toEqual(201);
		expect(res.body).toHaveProperty('post');
	});
});
 */

let server;

beforeAll(() => {
	server = app.listen(PORT);
});

afterAll(() => {
	server.close();
});

describe('Test the root path', () => {
	test('It should response the GET method', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
	});
});

describe('Sample Test', () => {
	it('should test that true === true', () => {
		expect(true).toBe(true);
	});
});
