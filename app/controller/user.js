const Controller = require('egg').Controller;
class UserController extends Controller{
    async info(){
        const {ctx} = this;
        const userId = ctx.params.id;
        const {errorCode} = ctx.app.config;
        if(!userId){
            ctx.throw(errorCode.PARAMS_EMPTY);
        }else{
            const userInfo = await ctx.service.user.find(userId);
            /**
             * 存在用户信息直接返回
             * 不存在 则抛出异常
             */
            if(userInfo){
                ctx.body = userInfo;
            }else{
                ctx.throw(errorCode.USER_NOT_EXIST)
            }
        }
    }
}
module.exports = UserController;
