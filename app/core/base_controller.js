const {Controller}  = require('egg');
class BaseController extends Controller {
    success(data){
        this.ctx.body = {
            state:'success',
            ...data
        }
    }
    fail(data){
        this.ctx.throw({
            state:'failed',
            ...data
        })
    }
}
module.exports = BaseController;
