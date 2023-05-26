/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 22:15:06
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 23:04:36
 * @FilePath: /learn-JavaScript-Senior/12_JS创建对象方案.js/06_对象的原型理解.js
 */
/**
 * 我们每个对象都有一个[[Prototype]],这个属性称之为对象的原型（隐式原型）
 */
var obj = { name: 'xxxx' }

//给对象中提供了一个属性，方便查看（浏览器提供）
// var obj = { name: 'xxxx', __proto__:{} }


console.log(obj.__proto__);


//ES5之后提供 Object.getPrototypeOf
console.log(Object.getPrototypeOf(obj));



/**
 *  原型用处：
 * 当我们从一个对象中获取某一个属性时，它会触发[[get]]操作
 */
// 1,在对象中查找对应的属性，找到直接使用
// 2,没找到，沿着原型链去查找
// 如何在原型赋值
obj.__proto__.age = 18
console.log(obj.age);
