const config = require('../data/config');
module.exports = class Cookies {
    constructor() {

    }

    //设置cookies
    set(key, value, ctx, next) {
        ctx.cookies.set(key, value, config.cookieConfig);
    }

    //读取cookies
    get(key, ctx, next) {
        return ctx.cookies.get(key);
    }

    //删除cookies
    del(key, ctx, next) {
        ctx.cookies.set(key, '', {signed: false, maxAge: 0});
    }
}