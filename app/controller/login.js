const Controller = require('egg').Controller;
const errorCode = require("./../../config/errorCode");

// const errorCode = require('')
const utility = require('utility');

class LoginController extends Controller {
    async login() {
        const {ctx} = this;
        const {errorCode} = ctx.app.config;
        const objParams = ctx.query;
        const {account, pwd} = objParams;
        /**
         * 账号或者密码错误
         */
        if (!account || !pwd) {
            ctx.throw(errorCode.PARAMS_EMPTY);
            return false;
        }
        const userInfo = await ctx.service.login.find(objParams);
        /**
         * 当用户登录成功, 存放一个token到redis
         */
        if (userInfo.code > 0) {
            const timeStamp = new Date().getTime();
            await ctx.service.redis.set(utility.md5(timeStamp+ account), {account}, 500);
            userInfo.token = utility.md5(timeStamp + account);
        }
        ctx.body = userInfo;
    }
}

module.exports = LoginController;
