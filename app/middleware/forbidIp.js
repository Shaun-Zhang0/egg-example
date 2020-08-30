/**
 * 中间件 - 拦截ip
 * @param {*} options 
 * @param {*} app 
 */
module.exports = (options, app) => {
    return async function forbidIp(ctx, next) {

        const ids = options.forbidIps;

        const clientIp = ctx.request.ip;
        console.log({clientIp});
        const isHasIp = ids.some(val => {
            if (val === clientIp) {
                return true;
            }
            return false;
        });
        if (isHasIp) {
            ctx.status = 403;
            ctx.body = '您的ip已经被屏蔽了';
        } else {
            await next();
        }
    }
}