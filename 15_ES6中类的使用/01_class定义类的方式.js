/*
 * @Author: Gauche楽
 * @Date: 2023-06-01 20:55:58
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-01 22:13:31
 * @FilePath: /learn-JavaScript-Senior/15_ES6中类的使用/01_class定义类的方式.js
 */
//类的声明
class Person {

}

//类的表达式
// var p = class Student {

// }

console.log(Person.prototype);
console.log(Person.prototype.__proto__); //[Object: null prototype] {}
console.log(Person.prototype.constructor); //[class Person]
console.log(typeof Person); //function


var p = new Person()
console.log(p.__proto__ === Person.prototype); //true