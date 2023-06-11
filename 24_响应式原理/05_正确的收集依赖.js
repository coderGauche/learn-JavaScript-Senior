/*
 * @Author: Gauche楽
 * @Date: 2023-06-11 22:19:21
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-12 01:13:40
 * @FilePath: /learn-JavaScript-Senior/24_响应式原理/05_正确的收集依赖.js
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

const targteMp = new WeakMap()
function getDepends(targte, key) {
    let objMap = targteMp.get(targte)
    if (!objMap) {
        objMap = new Map()
        targteMp.set(obj, objMap)
    }
    let depend = objMap.get(key)
    if (!depend) {
        depend = new Depend()
        objMap.set(key, depend)
    }
    return depend
}


// const dep = new Depend()

let reactiveFn = null
function watchFn(fn) {
    reactiveFn = fn
    fn()
    reactiveFn = null
}

const objProxy = new Proxy(obj, {
    get: (targte, key, value, receiver) => {
        const dep = getDepends(targte, key)
        dep.addPend(reactiveFn)
        return Reflect.get(targte, key, value, receiver)
    },
    set: (targte, key, value, receiver) => {
        Reflect.set(targte, key, value, receiver)
        const dep = getDepends(targte, key)
        dep.notify()
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
// console.log(objProxy.name);




// const dep = new Depend() 
