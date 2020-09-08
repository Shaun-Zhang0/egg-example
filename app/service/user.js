const Service = require('egg').Service;

class UserService extends Service {
    /**
     * 通过用户ID获取用户信息
     * @param uid
     * @returns {Promise<*>}
     */
    async find(uid) {
        const user = await this.app.mysql.get('user', {userId: uid});
        return user;
    }

    /**
     * 通过userID获取对应的用户名
     * @param account
     * @returns {Promise<*>}
     */
    async getUserIdByName(account) {
        const userInfo = await this.app.mysql.get('user', {account: account});
        return userInfo.userId;
    }

    /**
     * 判断用户是否已经存在
     * @param account
     * @returns {Promise<boolean>}
     */
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
