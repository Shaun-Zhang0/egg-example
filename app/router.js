module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/news',controller.news.list);
    router.get('/user/:id',controller.user.info);
    router.get("/login",controller.login.login);
    router.get("/logout",controller.login.logout);
    router.all("/register",controller.register.register);
    router.all("/get_product",controller.product.getProductInfo);
    router.all("/create_order",controller.order.createOrder);
};
