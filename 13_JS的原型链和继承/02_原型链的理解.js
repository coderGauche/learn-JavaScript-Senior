/*
 * @Author: Gauche楽
 * @Date: 2023-05-27 01:55:05
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-28 17:57:17
 * @FilePath: /learn-JavaScript-Senior/13_JS的原型链和继承/02_原型链的理解.js
 */
var obj = {
    name: 'xxx',
    age: 78
}

/**
 * 01,get操作
 * 02，没找到就回到原型【__proto__】对象查找
 * __proto__有兼容问题，开发不宜使用
 */
obj.__proto__.address = 'xxxa'
/**
 * 原型链
 * 原型对象去找原型，原型还有原型，一直无限查找产生的链条叫做原型链
 */
console.log(obj.address);