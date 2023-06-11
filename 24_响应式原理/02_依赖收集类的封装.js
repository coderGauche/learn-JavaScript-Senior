
/*
 * @Author: Gauche楽
 * @Date: 2023-06-11 22:19:21
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-12 01:19:41
 * @FilePath: /learn-JavaScript-Senior/24_响应式原理/02_依赖收集类的封装.js
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
