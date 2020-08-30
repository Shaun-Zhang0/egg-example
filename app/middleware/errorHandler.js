// app/middleware/error_handler.js
module.exports = (option, app) => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {          
      console.log('1111111');
      console.log(err);
      ctx.body = err;
    }
  };
};