module.exports = class Controller {
    constructor() {
        this.temp = '';
        this.data = {};
        this.echoContent = '';
        this.request = {};
    }

    /* 输出 */
    //输出到页面
    fetch(temp) {
        temp = temp || '';
        this.temp = temp;
        return {isTemp: true, temp: this.temp, data: this.data};
    }

    //写入到页面
    write(html) {
        return html;
    }

    //echo
    echo(content) {
        this.echoContent += content;
        return this.echoContent;
    }

    //设置属性
    assign(key, value) {
        this.data[key] = value;
    }

    // index(){
    //     this.assign('title','hello, koa');
    //     this.assign('ADMIN_PATH','/admin');
    //     return this.fetch('index');
    // }
};