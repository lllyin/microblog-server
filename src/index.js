const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const hellRouter = require('./route/helloRouter');
const articlesRouter = require('./route/articlesRouter');
const commentsRouter = require('./route/commentsRouter');

const app = new Koa();
const router = new Router();


app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});


// root
router.get('/', (ctx, next) => {
  ctx.body = 'home';
});


// test
router.get('/test', (ctx, next) => {
  ctx.body = { name: 'lll', age: 25 };
});


app
  .use(koaBody({ strict: false }))
  .use(router.routes())
  .use(hellRouter.routes())
  .use(commentsRouter.routes())
  .use(articlesRouter.routes())
  .use(router.allowedMethods());

app.listen(3000);
