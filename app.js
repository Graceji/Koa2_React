const Koa = require('koa');
const logger = require('koa-logger');
const views = require('koa-views');
const serve = require('koa-static');
const bodyparser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const MySqlStore = require('koa-mysql-session');
const config = require('./config/default');

const app = new Koa();

// 配置日志
app.use(logger());

// 配置静态文件夹
app.use(serve(__dirname + './src/client'));

// 设置渲染引擎
app.use(views(__dirname + './src/server/views', {
  extension: 'ejs'
}));

// 设置bodyparser
app.use(bodyparser());

app.listen(config.port, () => {
  console.log(`服务器监听在${config.port}端口`)
});
