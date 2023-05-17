/*
 * @Author: Gauche楽
 * @Date: 2023-05-18 02:36:50
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-18 03:00:54
 * @FilePath: /learn-JavaScript-Senior/02_作用域面试题/04_作用域面试题.js
 */

/**
 * 重点：在过程期间不受return的约束  
 * 答案：undefined
 * 解题：
 * GO：a：undefined  foo:01x001
 * VO等于GO
 * VO执行： 触发foo
 * AO：a：undefined  VO等于AO
 * AO执行：
 * 第一个打印的a去找自身发现有  所以是undefined
 */
var a = 100
function foo(params) {
    console.log(a);
    return
    var a = 100
}

foo()