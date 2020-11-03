const Controller = require('../core/base_controller');

class RegisterController extends Controller {
    async register() {
        const {ctx} = this;
        const {errorCode} = ctx.app.config;
        const {account, password} = ctx.request.body;
        if (!account || !password) {
            this.fail(errorCode.PARAMS_EMPTY);
        } else {
            const userRegister = await ctx.service.register.addUser({account, password});
            if (userRegister.code > 0) {
                this.success(userRegister);
            } else {
                this.fail(userRegister);
            }
        }
    }
}

module.exports = RegisterController;
