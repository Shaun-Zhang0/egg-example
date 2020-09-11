const Service = require("egg").Service;

class ProductService extends Service {
    async findProductById(id) {
        const product = await this.app.mysql.get('product', {id});
        return product;
    }

    async deductProduct(productId,deductNum){
        const productInfo  = await this.findProductById(productId);

    }

}

module.exports = ProductService;
