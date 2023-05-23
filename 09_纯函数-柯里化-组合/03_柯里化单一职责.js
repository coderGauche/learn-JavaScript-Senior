/*
 * @Author: Gauche楽
 * @Date: 2023-05-24 00:02:24
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-24 00:05:19
 * @FilePath: /learn-JavaScript-Senior/09_纯函数-柯里化-组合/03_柯里化单一职责.js
 */
function add(x, y, z) {
    x = x + 1
    y = y + 1
    z = z + 1

    return x + y + z
}

console.log(add(10, 20, 30));



function sum(x) {
    x = x + 1
    return function name(y) {
        y = y + 1
        return function (z) {
            z = z + 1
            return x + y + z
        }
    }
}
console.log(sum(10)(20)(30));