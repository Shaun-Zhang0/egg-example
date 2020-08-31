const Service = require("egg").Service;

class RedisService extends Service {
    /**
     * 设置
     * @param {*} key key值
     * @param {*} value 需要存储的值
     * @param {*} time 过期时间
     */
    async set(key, value, time) {
        const { redis } = this.app;
        value = JSON.stringify(value);
        if (!time) {
            await redis.set(key, value)
        } else {
            await redis.set(key, value, 'EX', time);
        }
    }
    /**
     * 获取
     * @param {*} key 
     */
    async get(key) {
        const { redis } = this.app;
        let data = await redis.get(key);
        if (!data) {
            return false;  
        }
        data = JSON.stringify(data);
        return data;
    }
} 
module.exports = RedisService;
