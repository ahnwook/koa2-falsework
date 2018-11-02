const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const start = require('./lib/start');

// error handler
onerror(app)
// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))

app.use(start.err);
app.use(start.logger);
app.keys = start.keys;
app.use(start.setSession(app));
app.use(start.routes, start.allowedMethods);

module.exports = app
