/*
 * @Author: Gauche楽
 * @Date: 2023-06-11 22:19:21
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-12 01:20:12
 * @FilePath: /learn-JavaScript-Senior/24_响应式原理/03_自动监听对象变化.js
 */
const obj = {
    name: 'xxx',
    age: 18
}

class Depend {
    constructor() {
        this.rectiveFns = []
    }
    addPend(fn) {
        this.rectiveFns.push(fn)
    }
    notify() {
        this.rectiveFns.forEach(fn => {
            fn()
        })
    }
}


const dep = new Depend()

function watchFn(fn) {
    dep.addPend(fn)
    fn()
}

const objProxy = new Proxy(obj, {
    get: (targte, key, value, receiver) => {
        return Reflect.get(targte, key, value, receiver)
    },
    set: (targte, key, value, receiver) => {
        Reflect.set(targte, key, value, receiver)
    }
})

watchFn(function () {
    // let newName = objProxy.name
    console.log(objProxy);
})

watchFn(function (params) {
    console.log('第一个name开始');
    console.log('测试' + objProxy.name);
    console.log('测试' + objProxy.age);
    console.log('第一个name结束');
})


console.log('改变obj的age开始');
objProxy.age = 99
