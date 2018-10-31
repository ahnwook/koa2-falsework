const Controller = require('../../../cord/lib/Controller');
const Request = require('../../../cord/lib/Request');
module.exports = class IndexController extends Controller {
    constructor() {
        super();
    }

    index() {
        if (Request.getSession('user')) {
            this.assign('title','平台');
            this.assign('user',Request.getSession('user'));
            return this.fetch('admin/index');
        }else{
            Request.location('/admin/index/login');
        }
    }

    login() {
        if (Request.request.method === 'POST') {
            let username = Request.post()['username'];
            let password = Request.post()['password'];
            if (username === 'admin' && password === 'admin123') {
                Request.setSession('user', username);
                return {errorcode: 0, msg: 'success', data: {url: '/admin/index/index'}};
            } else if (username === 'admin' && password !== 'admin123') {
                return {errorcode: 2, msg: '密码错误', data: {}};
            } else {
                return {errorcode: 1, msg: 'error', data: {}};
            }
        } else {
            this.assign('title', '登录');
            return this.fetch('admin/login');
        }
    }
    outLogin(){
        Request.delSession('user');
        return {errorcode: 0, msg: '退出成功', data: {url: '/admin/index/login'}};
    }
};