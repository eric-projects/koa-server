const proxy = require('koa-better-http-proxy');
const url = require('url');
const config = require('../koa.config.json');
module.exports = function() {
  return proxy('0', {
    proxyReqOptDecorator: (options, ctx) => {
      let targetUri;
      let toLocalSystem = false;
      const path = ctx.url.replace(/^\/api\//i, '/');
      const system = path.match(/^\/([^\/]+)\//)[1];

      const obj = (config.localSystems || []).find(p => p.system === system && p.enable);
      if (obj !== undefined) {
        targetUri = obj.uri;
        toLocalSystem = true;
      }

      const targetPath = !toLocalSystem ? path : path.replace(new RegExp('/' + system + '/'), '/');
      const uri = url.parse(targetUri);
      options.hostname = uri.hostname;
      options.port = Number(uri.port);

      ctx.url = targetPath;
      return options;
    }
  });
};
