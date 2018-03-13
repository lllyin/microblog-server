const Router = require('koa-router');
const helloRouter = new Router();


// hello
router.get('/hello',(ctx,next)=>{
  ctx.body = 'hello world';
})

// hello:msg
helloRouter.get('/hello/:msg',(ctx,next)=>{
  console.log('hello',ctx.params)
  ctx.body = 'hello '+ctx.params.msg;
})



module.exports = helloRouter;