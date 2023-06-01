/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 21:52:45
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-26 17:49:18
 * @FilePath: /learn-JavaScript-Senior/12_JS创建对象方案.js/04_创建对象方案-构造函数.js
 */
/**
 * 为什么不把name，age，height放原型上，因为都是原型的话Person对象里面没东西都要去原型上找，造成问题p1和p2的原型都是一个，会乱掉
 * 
 */
function Person(name, height, age, address) {
    this.name = name
    this.age = age
    this.height = height
    this.address = address
}

Person.prototype.eating = function () {
    console.log(this); //会影响this嘛，p1和p2都是指向一个原型，那得看this的调用者都是他们自身不会乱
}
Person.prototype.runing = function () {
    console.log(this);
}


var p1 = new Person('张三', 18, 1.8888, '北京')
var p2 = new Person('张三1', 18, 1.8888, '北京')
var p3 = new Person('张三2', 18, 1.8888, '北京')
console.log(p1, p2, p3);
p1.eating()
p1.runing()