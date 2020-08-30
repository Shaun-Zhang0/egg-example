module.exports = {
    /**
     * 获取请求带的cookie 并转换为对象
     */
    get cookiesObj() {
        let cookieStr = this.request.header.cookie;
        if(!cookieStr){return null}
        let obj = {}
        if (cookieStr.indexOf(';') > 0) {
            let hasSplitArr = cookieStr.split(';');
            hasSplitArr.map(item => {
                let itemArr = item.split('=');
                obj[itemArr[0]] = itemArr[1];
            })
        } else {
            let itemArr = cookieStr.split('=');
            obj[itemArr[0]] = itemArr[1];
        }
        return obj;
    }
}