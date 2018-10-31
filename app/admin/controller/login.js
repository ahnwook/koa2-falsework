const Controller = require('../../../cord/controller/Controller');
module.exports = class IndexController extends Controller{
    constructor(){
        super();
    }
    index(){
        this.assign('title','hello, koa');
        return this.fetch();
    }
    login(){
        this.assign('title','hello, koa');
        return this.fetch('admin/login');
    }
};