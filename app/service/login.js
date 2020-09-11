const Service = require("egg").Service;

class LoginService extends Service {
    async find(objParams) {
        let result = {};
        const {account, pwd} = objParams;
        const post = await this.app.mysql.get('user', {account: account, password: pwd});
        if (!post) {
            result = this.ctx.app.config.errorCode.LOGIN_INFO_ERROR;
        } else {
            result = {code: 1, msg: '登录成功'};
        }
        return result;
    }

    async recordLoginIp(account, timeStamp) {
        const {request} = this.ctx;
        await this.app.mysql.insert('login_record', {account: account, ip_address: request.ip, create_time: timeStamp});
    }
}


module.exports = LoginService;
