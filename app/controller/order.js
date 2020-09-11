const Controller = require('egg').Controller;

class OrderController extends Controller {
    async createOrder() {
        const {ctx} = this;
        const {errorCode} = ctx.app.config;
        const {product_id, product_num} = ctx.query;
        if (!product_id || !product_num) {
            ctx.throw(errorCode.PARAMS_EMPTY);
        }
        const productInfo = await ctx.service.product.findProductById(product_id);
        if (!productInfo) {
            ctx.throw(errorCode.PRODUCT_NOT_EXIST)
        }
        const timeStamp = new Date().getTime();
        const orderInfo = await ctx.service.order.create({product_id, product_num, timeStamp});
        ctx.body = orderInfo;
    }
}

module.exports = OrderController;
