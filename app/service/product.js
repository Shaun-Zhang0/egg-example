const Service = require("egg").Service;

class ProductService extends Service {
    async findProduct(id) {
        const product = await this.app.mysql.get('product', {id});
        return product;
    }
}

module.exports = ProductService;
