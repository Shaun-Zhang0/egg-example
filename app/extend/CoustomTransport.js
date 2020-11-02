const FileTransport = require('egg-logger').FileTransport;
const moment = require('moment');

class CoustomTransport extends FileTransport {
    constructor(options, ctx) {
        super(options);
        this.ctx = ctx;
    }

    log(level, args, meta) {
        const prefixStr = this.buildFormat(level);
        for (let i in args) {
            if (args.hasOwnProperty(i)) {
                if (parseInt(i, 10) === 0) {
                    args[i] = `${prefixStr}${args[i]}`;
                }
            }
        }
        super.log(level, args, meta);
    }

    buildFormat(level) {
        const timeStr = `[${moment().format('YYYY-MM-DD HH:mm:ss')}]`;
        const threadNameStr = `[${process.pid}]`;
        const urlStr = `[${this.ctx.request.url}]`;
        const requestIP = `[${this.ctx.request.ip}]`;
        return `${timeStr}${threadNameStr}${requestIP}${urlStr}`;
    }
}

module.exports = CoustomTransport;
