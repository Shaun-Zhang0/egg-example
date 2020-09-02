const Service = require("egg").Service;

class RegisterService extends Service {
    async addUser(objParams) {
        let result = {};
        const {ctx} = this;
        const {account, password} = objParams;
        const userExist = await ctx.service.user.getUserIdByName(account);
        if(userExist){

        }
        console.log(userInfo);
        // const insertResult = await this.app.mysql.insert('user',{account,password});
        // if(insertResult.affectedRows>0){
        //     result = {code: 1, msg: '登录成功'};
        // }else{
        //     result = this.ctx.app.config.errorCode.USER_REGISTER_ERROR;
        // }
        return result;
    }
}

module.exports = RegisterService;
