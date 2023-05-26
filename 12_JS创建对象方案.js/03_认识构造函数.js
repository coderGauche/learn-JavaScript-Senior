/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 21:15:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 23:14:07
 * @FilePath: /learn-JavaScript-Senior/12_JS创建对象方案.js/03_认识构造函数.js
 */
/**
 * 构造函数也是函数  new foo后面括号可有可没有
 * new的时候都做了什么
 * 1.会创建个新的对象
 * 2.这个对象内部的prototype属性会被 赋值为该构造函数的prototype属性
 * 3.构造函数内部的this，会指向创建出来的新对象
 * 4.开始执行函数体内部的代码   执行完所有代码之后内部会自动把刚创建的对象返回的
 * 5.
 */


function foo(params) {
    // var moni = {}
    // this = {}
    // this.__proto__ = foo.prototype //这个对象内部的prototype属性会被 赋值为该构造函数的prototype属性
}

var p1 = new foo()
var p2 = new foo()
console.log(p1.__proto__ === foo.prototype); //true
console.log(p1);