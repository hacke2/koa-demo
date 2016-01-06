import koa from 'koa';
import user from './model/User';
import _debug from 'debug';
import _router from 'koa-router';


const debug = _debug('koa-learning:index');
const app = koa();
const router = _router();
const port = process.env.PORT || 3000;



app.use(function* (next) {
	let start = new Date;
	yield next;
	let ms = new Date - start; 
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


