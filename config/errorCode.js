module.exports = {
    /**
     * 错误码
     *  1 开头==> 用户相关的错误码
     */
    'PARAMS_EMPTY': {
        code: -1,
        message: '参数缺失'
    },
    'NOT_LOGIN': {
        code: -10001,
        message: '请先登录'
    },
    'USER_NOT_EXIST': {
        code: -10002,
        message: '当前用户不存在'
    },
    'LOGIN_INFO_ERROR': {
        code: -10003,
        message: '用户名或者密码错误'
    }
};
