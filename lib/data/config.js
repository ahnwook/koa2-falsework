module.exports = {
    name: '党建数据平台',
    rootPath: __dirname + '/../..',
    appName: 'app',
    handelName: 'handle',
    defaultModule: {
        m: 'admin',
        c: 'index',
        a: 'index'
    },
    staticPath: {
        INDEX_PATH: '/static/index',
        ADMIN_PATH: '/static/admin'
    },
    cookieConfig: {
        path: '/',       // 写cookie所在的路径
        signed: true,
        maxAge: 2 * 60 * 60 * 1000,   // cookie有效时长
        expires: new Date() * 1000 * 60 * 60 * 24 * 7, // cookie失效时间
        httpOnly: false,  // 是否只用于http请求中获取
    },
    sessionConfig: {
        key: 'koa:sess',   //cookie key (default is koa:sess)
        maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
        overwrite: true,  //是否可以overwrite    (默认default true)
        httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
        signed: true,   //签名默认true
        rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
        renew: false,  //(boolean) renew session when session is nearly expired,
    }
}