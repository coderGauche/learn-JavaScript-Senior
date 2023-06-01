/*
 * @Author: Gauche楽
 * @Date: 2023-05-27 01:35:30
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-27 01:36:26
 * @FilePath: /learn-JavaScript-Senior/13_JS的原型链和继承/01_可枚举属性的补充.js
 */
var obj = {
    name: 'xxx',
    age: 17
}


Object.defineProperty(obj, 'address', {
    enumerable: false,
    value: '北京'
})


console.log(obj);