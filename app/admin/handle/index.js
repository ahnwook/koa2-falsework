module.exports = class IndexHandle {
    constructor(){

    }
    async index(ctx, next){
        
        await ctx.render('index', {title:ctx.query.title});
    }
    async login(ctx, next){
        ctx.body = `I am ${ctx.params.a}!`;
    }
    async api(ctx, next){

    }
};