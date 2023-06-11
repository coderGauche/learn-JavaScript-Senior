/*
 * @Author: Gauche楽
 * @Date: 2023-06-11 17:35:15
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-11 18:20:05
 * @FilePath: /learn-JavaScript-Senior/23_Proxy-Reflect/06_receiver参数的作用.js
 */
const obj = {
    _name: 'xxx',
    age: 18,
    get name() {
        return this._name
    },
    set name(value) {
        this._name = value
    }
}


const objProxy = new Proxy(obj, {
    get: (target, key, receiver) => {
        console.log('对foo进行了get监听', key);
        return Reflect.get(target, key, receiver)
    },
    set: (target, key, value, receiver) => {
        console.log('对foo进行了set监听', key);
        return Reflect.set(target, key, value, receiver)
    }
})


objProxy.name = 'x0000'
console.log(objProxy.name);
/**
 * 对foo进行了set监听 name
 * 对foo进行了set监听 _name
 * 对foo进行了get监听 name
 * 对foo进行了get监听 _name
 * x0000
 */