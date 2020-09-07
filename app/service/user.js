const Service = require('egg').Service;

class UserService extends Service {
    async find(uid) {
        const user = await this.app.mysql.get('user', {userId: uid});
        return user;
    }

    async getUserIdByName(account) {
        const userInfo = await this.app.mysql.get('user', {account: account});
        return userInfo.userId;
    }

    async checkUserExist(account) {
        const userInfo = await this.app.mysql.get('user', {account: account});
        if (userInfo === null) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = UserService;
