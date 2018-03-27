const Router = require('koa-router');
const models = require('../model');

const ArticleModel = models.getModel('article');
const commentsRouter = new Router({
  prefix: '/api',
});


commentsRouter.post('/articles/:id/comments', async (ctx, next) => {
  const reqBody = ctx.request.body;
  const { id } = ctx.params;
  console.log('新增评论', id, reqBody);
  const res = await ArticleModel.update({ _id: id }, { $push: { comments: reqBody } }); ;
  ctx.body = {
    msg: 'new comments',
    data: res,
  };
  console.log(1);
});


module.exports = commentsRouter;

