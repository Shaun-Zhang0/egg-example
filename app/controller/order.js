const Controller = require('egg').Controller;

class OrderController extends Controller {
    async createOrder() {
        const {ctx} = this;
        const OrderInfo = await ctx.service.order.create();

    }
}

module.exports = OrderController;
