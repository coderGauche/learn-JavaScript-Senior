/*
 * @Author: Gauche楽
 * @Date: 2023-05-17 06:38:46
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-18 03:13:14
 * @FilePath: /learn-JavaScript-Senior/02_作用域面试题/01_作用域面试题.js
 */

/**
 * 答案: 1
 * 解题
 * GO：age：undefined  foo：0ax100
 * VO：age：undefined
 * VO执行：0ax100   age：1
 * AO：age：GO：age：undefined
 * AO执行:
 */
var age = 1


function foo() {
    var age = 2
}

foo()

console.log(age);