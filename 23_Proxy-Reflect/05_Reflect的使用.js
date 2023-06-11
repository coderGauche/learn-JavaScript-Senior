/*
 * @Author: Gauche楽
 * @Date: 2023-06-11 17:21:45
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-11 17:32:06
 * @FilePath: /learn-JavaScript-Senior/23_Proxy-Reflect/05_reflect的使用.js
 */

/**
 * 众所周知ReflectES6新增的Api，是个对象，类似OBject操作对象的方法。用于映射
 * 既然有Obj为什么还要Reflect呢
 * 因为在Object上有不合理的，不规范的。在ECMA规范中没有考虑到，最后集中放到Reflect对象中。
 */

let obj = {
    name: 'xxx',
    age: 18
}

const ObjReflect = new Proxy(obj, {
    set: (targte, key, value, receiver) => {
        console.log('set捕获器', key);
        return Reflect.get(targte, key, value) //获取的是布尔值  设置是否成功 直接判断
    },
    get: (targte, key, receiver) => {
        console.log('get捕获器', key);
        return Reflect.get(targte, key)
    },
    has: (targte, key, receiver) => {
        console.log('has捕获器', key);
        return Reflect.has(targte, key)
    },
    deleteProperty: (targte, key, receiver) => {
        console.log('delete捕获器', key);
        delete Reflect.deleteProperty(targte, key)
    }
})

ObjReflect.name = 'xxx1111'
console.log(ObjReflect.name);

console.log('name' in ObjReflect);

delete ObjReflect.name