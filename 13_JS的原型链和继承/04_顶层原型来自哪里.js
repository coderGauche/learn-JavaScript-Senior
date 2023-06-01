/*
 * @Author: Gauche楽
 * @Date: 2023-05-27 02:09:24
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-29 15:19:43
 * @FilePath: /learn-JavaScript-Senior/13_JS的原型链和继承/04_顶层原型来自哪里.js
 */
var obj = { name: 'xxxx' } //创建了一个对象
var obj1 = new Object() //创建了一个对象
/**
 * new Object() 和自定义的对象{} 的创建过程
 * var moni = {}
 * this = moni 
 * 将Object的显示原型赋值给创建出来的对象的隐式原型
 * moni.__proto__ = Object.prototype
 * 执行代码体
 * 输出__proto__：
 * obj1.__proto__ = Object.prototype
 */


console.log(Object.prototype === obj1.__proto__); //true
console.log(Object.prototype === obj.__proto__); //true

console.log(Object.getOwnPropertyDescriptors(Object.prototype));



function Person(params) {

}

var p1 = new Person()