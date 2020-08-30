const Service = require("egg").Service;

class LoginService extends Service {
    async find(objParams) {
        let result = {}
        const { account, pwd } = objParams;
        const post = await this.app.mysql.get('user', { account: account, password: pwd })
        if (!post) {
            result = { code: -20003, msg: '用户名或密码错误，请确认后再进行登录!' }
        } else {
            result = { code: 1, msg: '登录成功' }
        }
        return result;
    }
}
module.exports = LoginService;