const router = require('koa-router')();
const config = require('../data/config');
const data_path = '../data';

router.get("/:m/:c/:a", async (ctx, next) => {
    // console.log(ctx.params);//路由
    // console.log(ctx.request.query);//参数
    const controller = require(`${config.APP_PATH}/${ctx.params.m}/${config['CONTROLLER_NAME']}/${ctx.params.c}`);
    let handle = new controller();
    handle.getRequest(ctx.request);
    if (typeof handle[ctx.params.a] !== 'function') {
        ctx.response.type = 'text/html';
        ctx.response.body = `404`;
    } else {
        let getData = handle[ctx.params.a]();
        if (typeof getData === 'string') {
            ctx.response.type = 'text/html';
            ctx.response.body = handle.echoContent;
            ctx.response.body += getData;
        } else if (typeof getData === 'object') {
            const con = require(data_path + '/static_const');
            getData.data = Object.assign({}, con, getData.data);
            if (getData.temp === '') {
                getData.temp = ctx.params.a;
            }
            await ctx.render(getData.temp, getData.data);
        } else {
            ctx.response.body = handle.echoContent;
        }
    }
});
router.post('/:m/:c/:a', async (ctx, next) => {
    // console.log(ctx.params);//路由
    // console.log(ctx.request.query);//get参数
    // console.log(ctx.request.body);//表单参数
    const controller = require(`${config.APP_PATH}/${ctx.params.m}/${config['CONTROLLER_NAME']}/${ctx.params.c}`);
    let handle = new controller();
    handle.getRequest(ctx.request);
    if (typeof handle[ctx.params.a] !== 'function') {
        ctx.response.type = 'text/html';
        ctx.response.body = `404`;
    } else {
        let getData = handle[ctx.params.a]();
        if (typeof getData === 'string') {
            ctx.response.type = 'text/html';
            ctx.response.body = handle.echoContent;
            ctx.response.body += getData;
        } else if (typeof getData === 'object') {
            const con = require(data_path + '/static_const');
            getData.data = Object.assign({}, con, getData.data);
            if (getData.temp === '') {
                getData.temp = ctx.params.a;
            }
            await ctx.render(getData.temp, getData.data);
        } else {
            ctx.response.body = handle.echoContent;
        }
    }
});

module.exports = router;
