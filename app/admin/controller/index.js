const Controller = require('../../../cord/controller/Controller');
module.exports = class IndexController extends Controller{
    constructor(){
        super();
    }
    index(){
        let username = Request.post()['username'];
        let password = Request.post()['password'];
        if (username === 'admin') {
            this.assign('title', '');
            return this.fetch('admin/index');
        }else{
            // Request.location('/admin/index/login');
        }
    }
    login(){
        this.assign('title', '');
        return this.fetch('admin/login');
        // return `<h1>${Request.input('addd','mmm')}</h1>
        // <form action="/admin/index/index" method="post">
        //     <p>Name: <input name="username" value="koa"></p>
        //     <p>Password: <input name="password" type="password"></p>
        //     <p><input type="submit" value="Submit"></p>
        // </form>`;
    }
};