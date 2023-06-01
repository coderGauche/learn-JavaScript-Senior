/*
 * @Author: Gauche楽
 * @Date: 2023-06-01 18:44:11
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-01 18:48:16
 * @FilePath: /learn-JavaScript-Senior/14_js原型内容的补充/03_isPrototypeOf.js
 */
function Person(params) {

}

var p = new Person()

console.log(p instanceof Person);

console.log(Person.prototype.isPrototypeOf(p));

var obj = {
    name: 'xxx',
    age: 18
}
var info = Object.create(obj)

// console.log(info instanceof obj); //不能这么勇 右边不能被调用，要求是构造函数

console.log(obj.isPrototypeOf(info));

/**
 * instanceof和isPrototypeOf区别
 * 
 * instanceof判断方法
 * isPrototypeOf
 */