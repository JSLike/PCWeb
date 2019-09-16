let local = {
    get: function (key) {
        return JSON.parse(localStorage.getItem(key))//JSON.parse() 方法将数据转换为 JavaScript 对象
    },
    set: function (key, val) { // 存储到本地中
        localStorage.setItem(key,JSON.stringify(val))//JSON.stringify() 方法将JavaScript对象转换为字符串
    }
};

export default {
    install: function (vm) {
        vm.prototype.$local = local
    },
}
