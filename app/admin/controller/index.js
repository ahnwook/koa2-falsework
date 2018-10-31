const Controller = require('../../../cord/controller/Controller');
module.exports = class IndexController extends Controller{
    constructor(){
        super();
    }
    index(){
        this.assign('title',this.get()['admin']+this.post()['name']);
        // this.echo(this.param()['admin']+'\n');
        // this.echo(this.param()['name']+'\n');
        // this.echo(this.param()['password']+'\n');
        return this.fetch('index');
    }
    login(){
        this.assign('title','hello, koa');
        return `<h1>${this.input('addd','mmm')}</h1>
        <form action="/admin/index/index?admin=11" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
    }
};