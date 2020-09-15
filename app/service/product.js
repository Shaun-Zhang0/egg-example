const Service = require("egg").Service;

class ProductService extends Service {
    async findProductById(id) {
        const product = await this.app.mysql.get('product', {id});
        return product;
    }

    // 删减库存
    async deductProduct(productId, deductNum) {
        const productInfo = await this.findProductById(productId);
        const {left} = productInfo;
        let updateSuccess = false;
        if (Number(left) === 0) { // 剩余库存为0
            updateSuccess = false;
            return updateSuccess;
        }
        if (Number(left) >= Number(deductNum)) {
            const deductStatus = await this.app.mysql.update('product', {id: productId, left: left - deductNum});
            if (deductStatus.affectedRows > 0) {
                updateSuccess = true; // 删减库存成功
            } else {
                updateSuccess = false; // 删减库存失败
            }
        } else {
            updateSuccess = false; // 删除库存数大于剩余数
        }
        return updateSuccess;
    }
}

module.exports = ProductService;
