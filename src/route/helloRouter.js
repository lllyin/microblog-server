const Router = require('koa-router');

const helloRouter = new Router();


// hello
helloRouter.get('/hello', (ctx, next) => {
  ctx.body = 'hello world';
});

// hello:msg
helloRouter.get('/hello/:msg', (ctx, next) => {
  console.log('hello', ctx.params);
  ctx.body = 'hello ' + ctx.params.msg;
});

helloRouter.post('/hello', (ctx, next) => {
  console.log('hello', ctx, ctx.req);
  const json1 = { a: 1 };
  const json2 = { b: 2 };
  ctx.body = { ...json1, ...json2 };
});


module.exports = helloRouter;
