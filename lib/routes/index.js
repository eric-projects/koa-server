const Router = require('koa-router');
const router = new Router();
const config = require('../koa.config.json');
const apiProxy = require('../middlewares/api-proxy');

router.all(config.proxy, apiProxy(), async (ctx, next) => {});

module.exports = router.routes();
