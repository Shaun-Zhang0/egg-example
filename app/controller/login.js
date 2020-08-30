const Controller = require('egg').Controller;
const errorCode = require("./../../config/errorCode");

// const errorCode = require('')
const utility = require('utility');

class LoginController extends Controller {
    async login() {
        const { ctx } = this;
        const {errorCode} = ctx.app.config
        const objParams = ctx.query;
        const { account, pwd } = objParams;
        if (!account || !pwd) {
            // ctx.throw(-20000, {message:'出错了'})
            throw new Error(JSON.stringify(errorCode.LOGIN_INFO_ERROR));
            // ctx.throw(errorCode.LOGIN_INFO_ERROR)

            // ctx.body = { code: -10002, status: 'failed', msg: '用户名、密码不得为空' }
            return false;
        }
        const userInfo = await ctx.service.login.find(objParams)
        if (userInfo.code > 0) {
            console.log('进来了')
            await ctx.service.redis.set(account, utility.md5(account), 30)
        }
        ctx.body = userInfo;
    }
}
module.exports = LoginController; 