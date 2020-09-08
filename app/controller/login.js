const Controller = require('egg').Controller;

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
        const {cookiesObj} = ctx; // 获取cookie的信息
        /**
         * 判断cookie是否带有key
         */
        if (cookiesObj.key) {
            const hasToken = await ctx.service.redis.get(cookiesObj.key);
            /**
             * 判断key的value值是否存在redis中
             */
            !!hasToken && await ctx.service.redis.delete(cookiesObj.key);
        }


        const userInfo = await ctx.service.login.find(objParams);
        /**
         * 当用户登录成功, 存放一个token到redis
         */
        if (userInfo.code > 0) {
            const timeStamp = new Date().getTime();
            const userId = await ctx.service.user.getUserIdByName(account);
            await ctx.service.redis.set(utility.md5(timeStamp + account), {userId, account}, 500);
            userInfo.token = utility.md5(timeStamp + account);
        }
        ctx.body = userInfo;
    }


    // 登出
    async logout() {
        const {ctx} = this;
        const {cookiesObj} = ctx; // 获取cookie的信息
        await ctx.service.redis.delete(cookiesObj.key);
        ctx.body = {code: 1, message: '注销成功'};
    }
}

module.exports = LoginController;
