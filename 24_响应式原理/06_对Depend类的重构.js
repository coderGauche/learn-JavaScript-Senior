/*
 * @Author: Gauche楽
 * @Date: 2023-06-11 22:19:21
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-12 01:47:16
 * @FilePath: /learn-JavaScript-Senior/24_响应式原理/06_对Depend类的重构.js
 */
let reactiveFn = null
const obj = {
    name: 'xxx',
    age: 18
}

class Depend {
    constructor() {
        this.rectiveFns = new Set() //使用set原因，保证元素唯一，防止重新执行
    }
    addPend(fn) {
        this.rectiveFns.add(fn)
    }
    depend() {
        if (reactiveFn) {
            this.rectiveFns.add(reactiveFn)
        }
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

function watchFn(fn) {
    reactiveFn = fn
    fn()
    reactiveFn = null
}
const objProxy = new Proxy(obj, {
    get: (targte, key, value, receiver) => {
        const dep = getDepends(targte, key)
        dep.depend()
        return Reflect.get(targte, key, value, receiver)
    },
    set: (targte, key, value, receiver) => {
        Reflect.set(targte, key, value, receiver)
        const dep = getDepends(targte, key)
        dep.notify()
    }
})

watchFn(() => {
    console.log(objProxy.name, '+++++++++++++++++');
    console.log(objProxy.name, '-----------------');
})

objProxy.name = 'yyy'