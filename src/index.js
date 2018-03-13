const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const hellRouter = require('./route/helloRouter')

app.use(async (ctx,next)=>{
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time',`${ms}ms`)
})

app.use(async (ctx,next)=>{
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})


// app.use(async ctx =>{
//   ctx.body = '<h1>hello world</h1>'
// })

// app.use(ctx=>{
//   console.log(this,ctx)
// })

// root
router.get('/',(ctx,next)=>{
  ctx.body = 'home';
})

// hello
router.get('/hello',(ctx,next)=>{
  ctx.body = 'hello world';
})



app
  .use(router.routes())
  .use(hellRouter.routes())
  .use(router.allowedMethods());

app.listen(3000);