/**
 * 中间件 - 异常捕获
 * @param option
 * @param app
 * @returns {errorHandler}
 */
module.exports = (option, app) => {
    return async function errorHandler(ctx, next) {
        try {
            await next();
            ctx.swLog.info(err,'success');
            // ctx.logger.info(ctx.body);
        } catch (err) {
            // ctx.getLogger.log(err);
            ctx.swLog.info(err,'fail');
            // ctx.logger.error(new Error(err));
            ctx.body = err;
        }
    };
};
