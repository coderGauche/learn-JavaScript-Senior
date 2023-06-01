/*
 * @Author: Gauche楽
 * @Date: 2023-05-30 00:25:55
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-01 16:46:54
 * @FilePath: /learn-JavaScript-Senior/13_JS的原型链和继承/10_继承_原型式继承-对象.js
 */
/**
 * 有一个对象
 * 创建新对象的原型指向原来的对象
 * 的实现
 * 
 * 
 * 都是基于对象来继承
 */
var obj = {
    name: 'xx',
    gae: 19
}

/**
 * 原型式继承函数
 */
function createObj(params) {
    var newObj = {}
    Object.setPrototypeOf(newObj, params)
    return newObj
}

/**
 * Douglas大佬的想法
 * 在没有 Object.setPrototypeOf的情况下实现原型式继承函数
 */
function createObj2(params) {
    function Fn() { }
    Fn.prototype = params
    var fnObj = new Fn()
    return fnObj
}

/**
 * es6的api实现
 */

var info2 = Object.create(obj)


var info = createObj(obj)
var info1 = createObj2(obj)

console.log(info.__proto__);
console.log(info1.__proto__);
console.log(info2.__proto__);

