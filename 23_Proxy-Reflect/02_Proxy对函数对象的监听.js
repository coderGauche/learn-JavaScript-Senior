/*
 * @Author: Gauche楽
 * @Date: 2023-06-11 15:46:11
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-11 15:51:11
 * @FilePath: /learn-JavaScript-Senior/23_Proxy-Reflect/02_Proxy对函数对象的监听.js
 */
function foo(params) {

}


const objProxy = new Proxy(foo, {
    apply: function (target, thisArg, argArray) {
        console.log('对foo进行了apply监听');
        return target.apply(thisArg, argArray)
    },
    construct: function (target, argArray, newTarget) {
        console.log('对foo进行了new监听');
        return new target(...argArray)
    }
})

// foo()
objProxy.apply({}, ['abc', 'aaaa'])
new objProxy('aaa', 'bbbb')
