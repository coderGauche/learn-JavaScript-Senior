/*
 * @Author: Gauche楽
 * @Date: 2023-05-18 02:36:09
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-18 02:58:39
 * @FilePath: /learn-JavaScript-Senior/02_作用域面试题/02_作用域面试题.js
 */

/**
 * 答案：undefined 200
 * 执行过程
 * GO：n=undefined foo：0ax100
 * AO：n = undefined  VO等于AO
 * VO执行 n=100   VO等于GO
 * AO执行 第一个n在自己身上去找在没有赋值的情况下是undefined   第二个n有赋值200
 */
function foo() {
    console.log(n)
    var n = 200
    console.log(n)
}

var n = 100

foo()

