const path = require('path');
var fs = require('fs');
const config = require('./koa.config.json');
module.exports = function () {
  return async (ctx, next) => {
    ctx.type = 'html';
    const proxys = config.proxy;
    const proxy = proxys.find(f => f.path === ctx.url);
    if (proxy && proxy.file) {
      ctx.body = fs.createReadStream(path.resolve(__dirname, './' + proxy.file));
    } else {
      ctx.body = fs.createReadStream(path.resolve(__dirname, './index.html'));
    }
  };
};
