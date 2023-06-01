/*
 * @Author: Gauche楽
 * @Date: 2023-05-29 15:41:13
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-29 15:44:13
 * @FilePath: /learn-JavaScript-Senior/13_JS的原型链和继承/06_为什么有继承.js
 */
function Student(name, age, sno) {
    this.name = name
    this.age = age
    this.sno = sno
}

Student.prototype.runing = function () {
    console.log(this.name + "runing");
}

Student.prototype.eating = function () {
    console.log(this.name + "eating");
}

Student.prototype.studing = function () {
    console.log(this.name + "studing");
}



function Person(name, age, title) {
    this.name = name
    this.age = age
    this.title = title
}

Person.prototype.runing = function () {
    console.log(this.name + "runing");
}

Person.prototype.eating = function () {
    console.log(this.name + "eating");
}

Person.prototype.teching = function () {
    console.log(this.name + "teching");
}
