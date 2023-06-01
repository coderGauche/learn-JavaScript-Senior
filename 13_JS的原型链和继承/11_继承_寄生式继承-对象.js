/*
 * @Author: Gauche楽
 * @Date: 2023-06-01 16:46:20
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-01 16:58:08
 * @FilePath: /learn-JavaScript-Senior/13_JS的原型链和继承/11_继承_寄生式继承-对象.js
 */
/**
 * 寄生式继承原则：利用原型类继承和工厂函数来实现
 * 弊端：每次方法里的新增的方法都会存在，重复性极高！
 */


var obj = {
    name: 'xxx',
    age: 17
}


function creacte(height) {
    var info = Object.create(obj)
    info.height = height
    return info
}


var stuObj1 = creacte(188)
var stuObj2 = creacte(189)
var stuObj3 = creacte(187)


console.log(stuObj1.__proto__);
console.log(stuObj2.__proto__);
console.log(stuObj3.__proto__);

