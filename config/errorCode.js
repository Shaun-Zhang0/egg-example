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
    },
    'USER_REGISTER_ERROR': {
        code: -10004,
        message: '注册失败，请稍后重试'
    },
    'USER_HAS_EXIST': {
        code: -10005,
        message: '该用户已存在，请重新注册~'
    }
};
