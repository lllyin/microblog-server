const Router = require('koa-router');
const articlesRouter = new Router({
  prefix: '/api'
});


// GET:article list
articlesRouter.get('/articles', (ctx, next) => {
  ctx.body = {
    msg:'article list',
    data:[{name:'title',createTime:123456}]
  }
})

// GET: article detail
articlesRouter.get('/articles/:id', (ctx, next) => {
  const reqParams = ctx.params;
  ctx.body = {
    msg:'article detail',
    data:reqParams
  }
})

// POST: new article
articlesRouter.post('/articles',async(ctx,next)=>{
  const reqBody = ctx.request.body;
  ctx.body = {
    msg:'new article',
    data:reqBody
  }
})

// DELETE: delete article
articlesRouter.delete('/articles',(ctx,next)=>{
  const reqBody = ctx.request.body;
  ctx.body = {
    msg:'delete article',
    data:reqBody
  }
})


// PUT: change article
articlesRouter.put('/articles',(ctx,next)=>{
  const reqBody = ctx.request.body;    
  ctx.body = {
    msg:'change article',
    data:reqBody
  }
})


module.exports = articlesRouter;

