const Router = require('koa-router');
const models = require('../model');

const ArticleModel = models.getModel('article');
const articlesRouter = new Router({
  prefix: '/api',
});


// GET:article list
articlesRouter.get('/articles', async (ctx, next) => {
  const articleList = await ArticleModel.find({});  
  ctx.body = {
    msg: 'article list',
    data: articleList,
  };
});

// GET: article detail
articlesRouter.get('/articles/:id', async (ctx, next) => {
  const reqParams = ctx.params;
  const article = await ArticleModel.find({ _id: reqParams.id });
  ctx.body = {
    msg: 'article detail',
    data: article,
  };
});

// POST: new article 
// {
//   "title":"test",
//   "content":"test",
//   "create_time":123456
// }

articlesRouter.post('/articles', async (ctx, next) => {
  const reqBody = ctx.request.body;
  const article = new ArticleModel(reqBody);
  const res = await article.save((err) => {
    console.log('save satatus:', err);
  });
  ctx.body = {
    msg: 'new article',
    data: res,
  };
  console.log(1);
});

// DELETE: delete article
articlesRouter.delete('/articles', async (ctx, next) => {
  const { ids } = ctx.request.body;
  const res = await ArticleModel.remove({ _id: { $in: ids } });
  ctx.body = {
    msg: 'delete article',
    data: res,
  };
});


// PUT: change article
articlesRouter.put('/articles/:id', async (ctx, next) => {
  const reqBody = ctx.request.body;   
  const { id } = ctx.params;  
  console.log('--', id, reqBody);
  const res = await ArticleModel.update({ _id: id }, reqBody);
  ctx.body = {
    msg: 'change article',
    data: res,
  };
});


module.exports = articlesRouter;

