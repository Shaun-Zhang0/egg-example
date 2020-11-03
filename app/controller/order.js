/**
 * @Description: 订单 - 控制器
 * @author Xiaofeng Zhang
 * @date 2020/11/3
*/
const Controller = require('../core/base_controller');

class OrderController extends Controller {
    async createOrder() {
        const {ctx} = this;
        const {errorCode} = ctx.app.config;
        const {product_id, product_num} = ctx.query;
        if (!product_id || !product_num) {
            this.fail(errorCode.PARAMS_EMPTY);
        }
        const productInfo = await ctx.service.product.findProductById(product_id);
        if (!productInfo) {
            this.fail(errorCode.PRODUCT_NOT_EXIST);
        }
        const timeStamp = new Date().getTime();
        const orderInfo = await ctx.service.order.create({product_id, product_num, timeStamp});
        if(orderInfo.code>0){
            this.success(orderInfo)
        }else{
            this.fail(orderInfo)
        }
    }
}

module.exports = OrderController;
