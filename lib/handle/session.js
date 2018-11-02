const config = require('../data/config');
const cookies = require('./cookies');
module.exports = class Session {
    constructor() {

    }

    //设置session
    set(key, value, ctx, next) {
        ctx.session[key] = value;
    }

    //读取session
    get(key, ctx, next) {
        return ctx.session[key];
    }

    //删除session
    del(key, ctx, next) {
        ctx.session[key] = null;
    }
}