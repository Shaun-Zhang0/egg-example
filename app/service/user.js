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

    // async getPicture(uid) {
    //     const result = await this.ctx.curl("http://photoserver/uid=${uid}", { dataType: 'json' });
    //     return result.data;
    // }
}

module.exports = UserService;
