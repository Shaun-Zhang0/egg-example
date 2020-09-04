const Controller = require("egg").Controller;

class RegisterController extends Controller {
    async register() {
        const {ctx} = this;
        const {errorCode} = ctx.app.config;
        const {account, password} = ctx.request.body;
        if (!account || !password) {
            ctx.throw(errorCode.PARAMS_EMPTY);
        } else {
            const userRegister = await ctx.service.register.addUser({account, password});
            ctx.body = userRegister;
        }
    }
}

module.exports = RegisterController;
