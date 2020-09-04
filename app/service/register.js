const Service = require("egg").Service;

class RegisterService extends Service {
    async addUser(objParams) {
        let result = {};
        const {ctx} = this;
        const {account, password} = objParams;

        const userExist = await ctx.service.user.checkUserExist(account);
        // 用户名已存在
        if (!userExist) {
            ctx.throw(this.ctx.app.config.errorCode.USER_HAS_EXIST)
        } else {
            // 可以注册
            const createTimeStamp = Date.parse(new Date());
            const insertResult = await this.app.mysql.insert('user', {account, password, create_time: createTimeStamp});
            if (insertResult.affectedRows > 0) {
                result = {code: 1, msg: '注册成功~'};
            } else {
                result = this.ctx.app.config.errorCode.USER_REGISTER_ERROR;
            }
        }

        return result;
    }
}

module.exports = RegisterService;
