/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 23:05:52
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 23:11:21
 * @FilePath: /learn-JavaScript-Senior/12_JS创建对象方案.js/07_函数的原型理解.js
 */

function foo(params) {
}

/**
 * 函数也是个对象
 */
console.log(foo.__proto__); //函数作为对象来说，他也是有[[Prototype]]（隐式原型）
/**
 * 因为函数是个函数，所以他还会多出来一个显示原型属性：Prototype
 */
console.log(foo.prototype);
/**
 * 原型的作用
 */