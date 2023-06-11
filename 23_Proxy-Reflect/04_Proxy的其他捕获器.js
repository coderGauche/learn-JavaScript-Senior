/*
 * @Author: Gauche楽
 * @Date: 2023-06-11 15:20:33
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-11 15:37:44
 * @FilePath: /learn-JavaScript-Senior/23_Proxy-Reflect/02_Proxy的其他捕获器.js
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
    },
    has: (targte, key) => {
        console.log('has捕获器', key);
        return key in targte
    },
    deleteProperty: (targte, key) => {
        console.log('delete捕获器', key);
        delete targte[key]
    }
})

// set和get操作
// objProxy.name = 'xxx1'
// console.log(objProxy.name);
// console.log(obj.name);

// in操作
console.log('name' in objProxy);
delete objProxy.name
console.log(obj);