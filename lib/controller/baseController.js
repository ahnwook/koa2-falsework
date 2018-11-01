const config = require('../data/config');
module.exports= class BaseController {
    constructor(){

    }
    async view(url,params={},ctx, next){
        await ctx.render(url, Object.assign(params,config.staticPath));
    }
}