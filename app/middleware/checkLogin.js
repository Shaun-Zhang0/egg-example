/**
 * 中间件 - 检查用户是否登录
 * @param options
 * @param app
 * @returns {checkLogin}
 */
module.exports = (options, app) => {
    return async function checkLogin(ctx, next) {
        const {cookiesObj} = ctx; // 获取cookie的信息
        const {errorCode,GLOBAL} = ctx.app.config;
        if (cookiesObj && cookiesObj.key) {
            /**
             * 判断redis中是否存在该token
             * 是 - 则认为当前用户已登录
             * 否 - 则认为当前用户没有登录 返回需要用户登录的信息
             * @type {string}
             */
            const accountInfo = await ctx.service.redis.get(cookiesObj.key);
            if (accountInfo) {
                await ctx.service.redis.expireTokenLiveTime(cookiesObj.key, GLOBAL.TOKEN_EXPIRE); // 将用户token延长有效时间
                await next();
            } else {
                ctx.body = errorCode.NOT_LOGIN;
            }
        } else {
            const {errorCode} = ctx.app.config;
            ctx.body = errorCode.NOT_LOGIN;
        }
    }
};
