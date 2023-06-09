/*
 * @Author: Gauche楽
 * @Date: 2023-06-11 22:19:21
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-12 01:20:24
 * @FilePath: /learn-JavaScript-Senior/24_响应式原理/01_响应式函数的封装.js
 */
const obj = {
    name: 'xxx',
    age: 18
}

let rectiveFns = []


const dep = new Depend()

function watchFn(fn) {
    rectiveFns.push(fn)
    fn()
}

watchFn(function () {
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
