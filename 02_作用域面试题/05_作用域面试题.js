/*
 * @Author: Gauche楽
 * @Date: 2023-05-18 02:36:59
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-18 03:10:45
 * @FilePath: /learn-JavaScript-Senior/02_作用域面试题/05_作用域面试题.js
 */


/**
 * 重点：var a = b = 100分解   var a = 100   b= 100
 * 答案：
 * 解题：
 * GO：foo:01x001
 * VO：
 * VO执行：foo:01x001 没有找到 a或者b所以讲道理报错   但是这里感觉语法错误  b = 100没有定义但是还赋值  但是js在外侧调用显示100  他的原理
 * 是找不到b就会放到全局上
 * AO：分解了 var a = 100  b = 100
 * VO执行：
 */
function foo(params) {
    var a = b = 100
    // var a = 100
    // b = 100
}

foo()


console.log(a);
console.log(b);