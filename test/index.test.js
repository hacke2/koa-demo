var should = require('should');
var request = require('supertest');
var koa = require('koa');
var app = require('../index');


describe('Array', function () {
	describe('#indexOf()', function() {
		it('should return -l when the value is not present', function() {
			 [1, 2, 3].should.not.containDeep(5);
			 [1, 2, 3].should.not.containDeep(0);
		})
	})
});


describe('route', function () {
	describe('GET /user, should return 200', function(done) {
		request(app.listen())
		.get('/user')
		.expect(200, done);
	})
});