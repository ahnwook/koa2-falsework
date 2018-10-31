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

    //设置cookies
    static setCookie(name, value) {
        this.ctx.cookies.set(
            name, value, {
                path: '/',       // 写cookie所在的路径
                signed: true,
                maxAge: 2 * 60 * 60 * 1000,   // cookie有效时长
                expires: new Date() * 1000 * 60 * 60 * 24 * 7, // cookie失效时间
                httpOnly: false,  // 是否只用于http请求中获取
            }
        );
    }

    //删除cookies
    static delCookie(name) {
        this.ctx.cookies.set(
            name, '', {
                signed: true,
                path: '/',       // 写cookie所在的路径
                maxAge: 0,   // cookie有效时长
            }
        );
    }

    //读取cookies
    static getCookie(name) {
        return this.ctx.cookies.get(name);
    }

    //设置session
    static setSession(name, value) {
        this.ctx.session['name'] = value;
    }

    //删除session
    static delSession(name) {
        this.ctx.session['name'] = null;
    }

    //读取session
    static getSession(name) {
        return this.ctx.session['name'];
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