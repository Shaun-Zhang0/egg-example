const Controller = require('egg').Controller;

class ProductController extends Controller {
    async getProductInfo() {
        const {ctx} = this;
        const {errorCode} = ctx.app.config;
        const objParams = ctx.query;
        const productInfo = await ctx.service.product.findProduct(objParams.id);
        if (productInfo) {
            ctx.body = productInfo;
        } else {
            ctx.throw(errorCode.PRODUCT_NOT_EXIST);
        }
    }
}

module
    .exports = ProductController;
