/*
 * @Author: Gauche楽
 * @Date: 2023-05-27 02:05:57
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-27 02:08:52
 * @FilePath: /learn-JavaScript-Senior/13_JS的原型链和继承/03_Object的原型.js
 */
var obj = {
    name: 'xxx'
}

console.log(obj.address);

//他到底找到那一层对象停止查找
console.log(obj.__proto__); //[Object: null prototype] {}   这个原型就是对顶层的原型   没有继续往上擦找
console.log(obj.__proto__.__proto__); //达咩，最顶层原型了已经