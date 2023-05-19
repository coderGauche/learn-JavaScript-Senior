/*
 * @Author: Gauche楽
 * @Date: 2023-05-18 05:10:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-18 08:07:23
 * @FilePath: /learn-JavaScript-Senior/04_闭包/01_函数作参数的使用.js
 */
function foo(num1, num2, func) {
    console.log(func(num1, num2));
}
function add(n, m) {
    return n + m
}

function sub(n, m) {
    return n - m
}


foo(10, 20, add)
foo(10, 20, sub)