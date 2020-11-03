const Controller = require('../core/base_controller');

class ProductController extends Controller {
    async getProductInfo() {
        const {ctx} = this;
        const {errorCode} = ctx.app.config;
        const objParams = ctx.query;
        const productInfo = await ctx.service.product.findProductById(objParams.id);
        if (productInfo) {
            this.success(productInfo)
        } else {
            this.fail(errorCode.PRODUCT_NOT_EXIST);
        }
    }

}

module.exports = ProductController;
