module.exports = class Request {
    constructor() {
        this.request = {};
        this.ctx = {};
    }

    //获取request参数
    static getRequest(request) {
        this.request = request;
    }

    //获取request信息
    static getCtx(ctx) {
        this.ctx = ctx;
    }

    //链接跳转
    static location(source, destination, code) {
        this.ctx.redirect(source, destination, code);
    }

    /* 输出参数 */
    static get() {
        return this.request.query;
    }

    static post() {
        return this.request.body;
    }

    static param() {
        return Object.assign(this.request.query, this.request.body);
    }

    //助手
    static input(param, defParam = '') {
        let params = Object.assign(this.request.query, this.request.body);
        if (params[param] === undefined) {
            return defParam;
        } else {
            return params[param];
        }
    }
};