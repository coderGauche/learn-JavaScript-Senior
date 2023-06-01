/*
 * @Author: Gauche楽
 * @Date: 2023-05-29 15:49:29
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-29 20:48:08
 * @FilePath: /learn-JavaScript-Senior/13_JS的原型链和继承/08_继承-借用构造函数的继承方案.js
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

var p1 = new Person()
Student.prototype = p1

Student.prototype.runing = function (params) {
    console.log(this.name, 'runing');
}

// var person = new Person('Person')
var stu = new Student('Student')
console.log(stu.name);
stu.eating()

// console.log(Object.getOwnPropertyDescriptors(stu.__proto__));


//原型链实现继承的已解决弊端：
/**
 * 1.打印stu对象，某些属性看不到
 */

/**
 * 2.创建两个p1和p2对象
 * 获取引用，修改引用的值互相会受影响
 * 直接修改对象属性的，是给本对象添加了个属性
 */

var p1 = new Student('a', 'b', 'c', ['1', '2', '3'])
var p2 = new Student('a1', 'b1', 'c1', ['12', '22', '32'])
p1.name = 'xxx1'
p2.name = 'xxx2'
p1.list.push('xxx')
p2.list.push('xxx2')
console.log(p1.list);
console.log(p2.list);
console.log(p1.name);
console.log(p2.name);

/**
 * 3.传递参数会有问题
 */


//原型链实现继承的弊端：
/**
 * 1.多次调用Person
 * 2.stu的原型存在没必要的属性
 */