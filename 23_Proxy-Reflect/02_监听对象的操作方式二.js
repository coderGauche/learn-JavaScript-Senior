/*
 * @Author: Gauche楽
 * @Date: 2023-06-11 15:20:33
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-11 15:29:36
 * @FilePath: /learn-JavaScript-Senior/23_Proxy-Reflect/02_监听对象的操作方式二.js
 */
/**
 * 创建新的代理对象，访问都是代理对象，重写捕获器获取操作
 */
let obj = {
    name: 'xxx',
    age: 18
}



const objProxy = new Proxy(obj, {
    set: (targte, key, value) => {
        console.log('set捕获器', key);
        targte[key] = value
    },
    get: (targte, key) => {
        console.log('get捕获器', key);
        return targte[key]
    }
})


objProxy.name = 'xxx1'
console.log(objProxy.name);
console.log(obj.name);