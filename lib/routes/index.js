const Router = require('koa-router');
const router = new Router();
const config = require('../koa.config.json');

router.all(config.proxy, async (ctx, next) => {
  ctx.body = ctx.path;
  next();
});

module.exports = router.routes();
