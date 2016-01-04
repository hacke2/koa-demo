var debug = require('debug')('koa:index');
var koa = require('koa');
var app = koa();
var router = require('koa-router')();
var user = require('./model/User');
var port = process.env.PORT || 3000;



app.use(function* (next) {
	var start = new Date;
	yield next;
	var ms = new Date - start; 
	this.set('X-Response-Time', ms + 'ms');
});


app.use(function* (next) {
	this.body = 'hello koa';
});

router.get('/user', function* (next) {
	this.status = '200';
})

app.use(router.routes());


app.listen(port);

debug('listening ' + port);

module.exports = app;


