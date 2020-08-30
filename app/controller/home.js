const Controller  = require("egg").Controller;

class HomeController extends Controller{
    async index(){
        this.ctx.body = 'HEllO';
    }
}
module.exports = HomeController;