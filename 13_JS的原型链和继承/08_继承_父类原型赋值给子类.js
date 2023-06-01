/*
 * @Author: Gauche楽
 * @Date: 2023-05-29 15:49:29
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-30 00:19:24
 * @FilePath: /learn-JavaScript-Senior/13_JS的原型链和继承/08_继承_父类原型赋值给子类.js
 */
//Person
function Person(name, age, height, list) {
    this.name = name
    this.age = age
    this.height = height
    this.list = list
}
Person.prototype.eating = function (params) {
    console.log(this.name, 'eating');
}
//student
function Student(name, age, height, list) {
    Person.call(this, name, age, height, list)
    this.sno = 'xxx2'
}

Student.prototype = Person.prototype
Student.prototype = Object.create(Person.prototype)

Student.prototype.runing = function (params) {
    console.log(this.name, 'runing');
}
var stu = new Student('Student')
console.log(stu.name);
stu.eating()