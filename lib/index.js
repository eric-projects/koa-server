const koa = require('koa');
const static = require('koa-static');
const path = require('path');

const routes = require('./routes/index');
const config = require('./koa.config.json');

const app = (module.exports = new koa());
app.use(static(path.resolve(__dirname, '/public')));
app.use(routes);

app.listen(config.port, () => {
  console.log('listening port: ' + config.port);
});
