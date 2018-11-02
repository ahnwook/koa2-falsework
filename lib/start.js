const session = require('koa-session');
const config = require('./data/config');
const baseRoutes = require('./routes/baseRoutes');

//错误屏蔽
exports.err = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        // ctx.response.body = { message: err.message};
    }
};
// logger
exports.logger = async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
};
//session
exports.keys = ['my name is wook'];
exports.setSession = (app) => {
    return session(config.sessionConfig, app);
};
// routes
exports.routes = baseRoutes.routes();
exports.allowedMethods = baseRoutes.allowedMethods();

// app.use(start.err);
// app.use(start.logger);
// app.keys = start.keys;
// app.use(start.setSession(app));
// app.use(start.routes, start.allowedMethods);