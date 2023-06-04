/*
 * @Author: Gauche楽
 * @Date: 2023-06-04 23:55:52
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-05 00:01:46
 * @FilePath: /learn-JavaScript-Senior/17_ES6其他知识点/01_模板字符串的基本使用.js
 */
const a1 = 'xxx'

function foo(params) {
    return `aaaaa+${a1}`
}



const a2 = `xxxxx${a1}+${foo()}`

console.log(a2);