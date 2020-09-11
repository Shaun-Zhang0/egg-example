const Service = require("egg").Service;

class OrderService extends Service {
    async create({productId, productNum}) {
        const {ctx} = this;
        const {cookiesObj} = ctx;
        const hasToken = await ctx.service.redis.get(cookiesObj.key);
    }
}

module.exports = OrderService;
