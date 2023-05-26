/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 21:52:45
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 21:57:45
 * @FilePath: /learn-JavaScript-Senior/12_JS创建对象方案.js/04_创建对象方案-构造函数.js
 */
function Person(name, height, age, address) {
    this.name = name
    this.age = age
    this.height = height
    this.address = address

    this.eating = function (params) {

    }
    this.runing = function (params) {

    }
}


var p1 = new Person('张三', 18, 1.8888, '北京')
var p2 = new Person('张三1', 18, 1.8888, '北京')
var p3 = new Person('张三2', 18, 1.8888, '北京')
console.log(p1, p2, p3);

console.log(p1.__proto__.constructor.name);