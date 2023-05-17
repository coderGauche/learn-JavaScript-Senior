/*
 * @Author: Gauche楽
 * @Date: 2023-05-18 02:36:20
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-18 02:57:23
 * @FilePath: /learn-JavaScript-Senior/02_作用域面试题/03_作用域面试题.js
 */

/**
 * 
 * 答案：
 * 100 200 100
 * 执行顺序：
 * GO：n：undefined foo1:01x001  f002:01x002
 * VO:n=undefined VO等于GO
 * VO执行:n=100 第三个n为100
 * foo2的AO：n：undefined   VO等于AO
 * foo2的AO执行：n：200   第二个n为200
 * foo2的AO：空对象
 * foo2的AO执行：n：自身找不到找上级 他的上级在GO的时候已经定义了所以是最外层的100
 */
var n = 100

function foo1() {
    console.log(n, '01')
}

function foo2(params) {
    var n = 200
    console.log(n, '02');
    foo1()
}


foo2()
console.log(n, '03');