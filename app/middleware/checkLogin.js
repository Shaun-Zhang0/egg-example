module.exports = (options, app) => {
    return async function checkLogin(ctx, next) {
        const { cookiesObj } = ctx
        // if (cookiesObj.key) {
        //     console.log({ cookiesObj });
        //     next()
        // } else {

        // }
        next()
    }
}