/*
 * @Author: Gauche楽
 * @Date: 2023-05-26 16:15:13
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-26 17:32:10
 * @FilePath: /learn-JavaScript-Senior/12_JS创建对象方案.js/09_函数原型上的属性.js
 */
function Person(params) {
    //new的流程
    // var moni = {} 创建新的对象 
    // 新对象的原型protoType属性赋值为Person函数的protoType属性
    // 函数内部的this会指向新创建出来的对象
    // 执行代码体
    // 返回对象
}




/**
 * 一开始的话Person.prototype是看不见constructor的
 * 但通过我们修改defineProperty就能搞出来，说明他是存在的
 * Person.prototype 有个属性constructor
 * ecma就有的constructor，不在兼容问题
 * Person.prototype.constructor 指向构造函数本身
 */

// Object.defineProperty(Person.prototype, 'constructor', {
//     enumerable: true,
//     writable: true,
//     configurable: true,
//     value: 'xxx'
// })
console.log(Person.prototype);
// console.log(Object.getOwnPropertyDescriptors(Person.prototype));


// 我们也可以在原型上添加自己的属性
Person.prototype.name = 'xxxx'


var p1 = new Person()


console.log(p1.name);


//修改整个prototype 优缺点里面的enumerable等属性都是true有了约束
Person.prototype = {
    constructor: Person,//因为Person.prototype这么创建的话是新指向新对象他的原型被回收了，所以自己造
    name: 'xxx',
    age: 89,
}

var p3 = new Person()
console.log(p3.name);

//在真实开发中我们可以通过Object.defineProperty添加constructor,这么添加就跟原先的constructor一致了

Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: true,
    writable: true,
    configurable: true,
    value: Person
})
