// config/config.default.js
const errorCode = require("./errorCode");
exports.keys = '11111111111111';
// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0'
};
exports.mysql = {
    // 单数据库信息配置
    client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: '',
        // 数据库名
        database: 'egg',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
};
exports.redis = {
    client: {
        port: 6379,
        host: '127.0.0.1',
        password: '',
        db: 0
    }
};
// 配置中间件
exports.middleware = ['checkLogin', 'errorHandler'];

exports.checkLogin = {
    enable: true,
    ignore: ['/login', '/register']
};
// exports.middleware = ['checkLogin']
// // 配置forbidIp中间件的参数
// exports.forbidIp = {
//     forbidIps: ['127.0.0.1']
// }
exports.security = {csrf: {enable: false,}};
exports.logger = {
    outputJSON: true,
};

exports.errorCode = errorCode;
