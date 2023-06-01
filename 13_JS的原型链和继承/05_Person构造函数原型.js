/*
 * @Author: Gauche楽
 * @Date: 2023-05-29 15:35:11
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-29 15:40:28
 * @FilePath: /learn-JavaScript-Senior/13_JS的原型链和继承/05_Person构造函数原型.js
 */
function Person(params) {

}


var p1 = new Person()

console.log(Person.prototype);
console.log(Object.getOwnPropertyDescriptors(Person.prototype));
console.log(Person.prototype.__proto__); //[Object: null prototype] {}顶层了

/**
 * 他们的原型链都是Object
 * Person  继承  Object
 */