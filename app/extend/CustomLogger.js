/**
 * @Description: 自定义日志封装
 * @author Xiaofeng Zhang
 * @date 2020/11/3
*/
const Logger = require('egg-logger').Logger;
const CoustomTransport = require('./CoustomTransport.js');
const logger = new Logger();
const SUCCESS_LOG_PATH = 'logs/app-custom-success.log';
const FAIL_LOG_PATH = 'logs/app-custom-fail.log';
module.exports = {
    successLog:function(ctx){
        logger.set('file', new CoustomTransport({
            level: 'INFO',
            file: SUCCESS_LOG_PATH
        }, ctx));
        return logger;
    },
    failLog:function(ctx){
        logger.set('file', new CoustomTransport({
            level: 'INFO',
            file: FAIL_LOG_PATH
        }, ctx));
        return logger;
    }
};
