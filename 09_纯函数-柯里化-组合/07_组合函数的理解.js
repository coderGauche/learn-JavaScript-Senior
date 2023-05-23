/*
 * @Author: Gauche楽
 * @Date: 2023-05-24 02:39:46
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-24 02:44:31
 * @FilePath: /learn-JavaScript-Senior/09_纯函数-柯里化-组合/07_组合函数的理解.js
 */
function double(params) {
    return params * 2
}


function squre(params) {
    return params ** 2
}


var count = 10
var res = squre(double(count))
console.log(res);

//实现最简单的组合函数
function composeFn(m, n) {
    return function (params) {
        return n(m(params))
    }
}

var newFn = composeFn(double, squre)
console.log(newFn(count));