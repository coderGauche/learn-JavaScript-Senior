/*
 * @Author: Gauche楽
 * @Date: 2023-05-24 00:07:45
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-24 00:42:11
 * @FilePath: /learn-JavaScript-Senior/09_纯函数-柯里化-组合/04_柯里化-逻辑的复用.js
 */
function num(num1) {
    num1 = num1 + 1
    return function (x) {
        return num1 + x
    }
}


var res = num(5)
console.log(res(10));
console.log(res(20));
console.log(res(40));