/*
 * @Author: Gauche楽
 * @Date: 2023-05-24 15:44:28
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-24 15:56:05
 * @FilePath: /learn-JavaScript-Senior/10_with_eval_strict/01_with语句.js
 */

/**
 * with语句
 * 会形成自己的作用域
 * with（）{}传入的是给定的作用域
 * with现在不推荐使用with打开严格模式就会报错
 * 严格模式下不允许使用 "with" 语句。
 */
// "use strict"
var message = 'xxxx'

function foo(params) {
    return function (params) {
        with (message) {
            console.log(message);
        }
    }
}




foo()()
