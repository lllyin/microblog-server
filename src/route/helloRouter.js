const Router = require('koa-router');
const helloRouter = new Router();

// hello:msg
helloRouter.get('/hello/:msg',(ctx,next)=>{
  console.log('hello',ctx.params)
  ctx.body = 'hello '+ctx.params.msg;
})

// test
helloRouter.get('/test',(ctx,next)=>{
  ctx.body = {'name':'lll','age':25};
})

module.exports = helloRouter;