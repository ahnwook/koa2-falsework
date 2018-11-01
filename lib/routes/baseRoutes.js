const router = require('koa-router')();
const config = require('../data/config');
// const Handle = require('../app/admin/handle/index');
// const index = new Handle();
// router.prefix('/admin/index');
let autoRouter = async (ctx, next) => {
    ctx.params.m = ctx.params.m || config.defaultModule.m;
    ctx.params.c = ctx.params.c || config.defaultModule.c;
    ctx.params.a = ctx.params.a || config.defaultModule.a;
    const handle = require(`${config.rootPath}/app/${ctx.params.m}/handle/${ctx.params.c}`);
    const active = new handle();
    await active[ctx.params.a](ctx, next);
}

router.all('/:m?/:c?/:a?', autoRouter);

module.exports = router;
