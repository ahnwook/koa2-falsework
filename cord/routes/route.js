const router = require('koa-router')();
const config = require('../data/config');
const Request = require('../lib/Request');
const data_path = '../data';
let routerHandle = async (ctx, next) => {
    // console.log(ctx.params.a.split(".")[0]);//路由
    // console.log(ctx.request.query);//get参数
    // console.log(ctx.request.body);//表单参数
    const controller = require(`${config.APP_PATH}/${ctx.params.m}/${config['CONTROLLER_NAME']}/${ctx.params.c}`);
    let handle = new controller();
    Request.getCtx(ctx);
    Request.getRequest(ctx.request);
    if (typeof handle[ctx.params.a.split(".")[0]] !== 'function') {
        ctx.response.type = 'text/html';
        ctx.response.body = `404`;
    } else {
        let getData = handle[ctx.params.a.split(".")[0]]();
        if (typeof getData === 'string') {
            ctx.response.type = 'text/html';
            ctx.response.body = handle.echoContent;
            ctx.response.body += getData;
        } else if (typeof getData === 'object') {
            if (getData.isTemp === true) {
                if (getData.temp === '') {
                    getData.temp = ctx.params.a.split(".")[0];
                }
                const con = require(data_path + '/static_const');
                getData.data = Object.assign({}, con, getData.data);
                await ctx.render(getData.temp, getData.data);
            } else {
                ctx.response.type = 'application/json';
                ctx.response.body = getData;
            }
        } else {
            ctx.response.body = handle.echoContent;
        }
    }
};
router.get("/", async (ctx, next) => {
    ctx.redirect(`${config.defaultModule.m}/${config.defaultModule.c}/${config.defaultModule.a}`);
});
router.get("/:m/:c/:a", routerHandle);
router.post('/:m/:c/:a', routerHandle);

module.exports = router;
