const router = require('koa-router')();
const config = require('../data/config');
// const Handle = require('../app/admin/handle/index');
// const index = new Handle();
// router.prefix('/admin/index');
let autoRouter = async (ctx, next) => {
    if (ctx.params.m==undefined) {
        ctx.params.m = config.defaultModule.m;
    }else if(ctx.params.m.indexOf(".") != -1){
        return;
    }
    if (ctx.params.c==undefined) {
        ctx.params.c = config.defaultModule.c;
    }else if(ctx.params.c.indexOf(".") != -1){
        return;
    }
    if (ctx.params.a==undefined) {
        ctx.params.a = config.defaultModule.a;
    }
    const handle = require(`${config.rootPath}/${config.appName}/${ctx.params.m}/${config.handelName}/${ctx.params.c}`);
    const active = new handle();
    if (typeof active[ctx.params.a.split(".")[0]] == 'function') {
        await active[ctx.params.a.split(".")[0]](ctx, next);
    }
};

router.all('/:m?/:c?/:a?', autoRouter);

module.exports = router;
