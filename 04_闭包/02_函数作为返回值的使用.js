/*
 * @Author: Gauche楽
 * @Date: 2023-05-18 08:01:52
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-18 09:43:52
 * @FilePath: /learn-JavaScript-Senior/04_闭包/02_函数作为返回值的使用.js
 */
function foo(params) {
    function bar(num) {
        return num + params
    }
    return bar
}

var fn = foo(10)
console.log(fn(5));