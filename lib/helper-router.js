const Router = require('koa-router');
const proxy = require('./helper-proxy');
const router = new Router();

router.all('/*', proxy(), async (ctx, next) => {});

module.exports = router.routes();
