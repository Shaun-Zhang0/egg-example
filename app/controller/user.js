const Controller = require('../core/base_controller');
class UserController extends Controller{
    async info(){
        const {ctx} = this;
        const userId = ctx.params.id;
        const {errorCode} = ctx.app.config;
        if(!userId){
            this.fail(errorCode.PARAMS_EMPTY);
        }else{
            const userInfo = await ctx.service.user.find(userId);
            /**
             * 存在用户信息直接返回
             * 不存在 则抛出异常
             */
            if(userInfo){
                this.success(userInfo);
            }else{
                this.fail(errorCode.USER_NOT_EXIST)
            }
        }
    }
}
module.exports = UserController;
