const koa = require('koa');
const routes = require('./helper-router');
const config = require('./koa.config.json');

const app = (module.exports = new koa());
app.use(routes);

// app.use(async (ctx, next) => {
//   await next();
//   ctx.response.body = 'Hello, koa2!';
// });

app.listen(3333, () => {
  console.log('listening port: ' + config.port);
});
