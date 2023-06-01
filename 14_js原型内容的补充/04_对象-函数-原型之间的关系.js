/*
 * @Author: Gauche楽
 * @Date: 2023-06-01 19:00:27
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-01 19:28:18
 * @FilePath: /learn-JavaScript-Senior/14_js原型内容的补充/04_对象-函数-原型之间的关系.js
 */
var obj = {
    name: 'xxxx'
}

console.log(obj.__proto__);

/**
 * Foo是个函数，那么他会是个显示原型对象：Foo.prototype
 * Foo.prototype来自哪里
 * 创建一个函数，Foo.prototype = {constructor: Foo}
 * 
 * Foo是个对象,那么他会是个隐式原型对象：Foo.__proto__
 * Foo.__proto__来自哪里
 * new function() Foo.__proto__ = Function.prototype
 * Function.prototype = {constructor: Function}
 */
function Foo(params) {

}
console.log(Foo.prototype.constructor); //[Function: Foo]
console.log(Foo.__proto__.constructor); //[Function: Function]
console.log(Function.prototype === Function.__proto__); //true