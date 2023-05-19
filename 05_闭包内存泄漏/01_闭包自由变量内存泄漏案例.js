/*
 * @Author: Gauche楽
 * @Date: 2023-05-19 15:09:49
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-19 16:33:36
 * @FilePath: /learn-JavaScript-Senior/05_闭包内存泄漏/01_闭包内存泄漏案例.js
 */
/**
 * 自由变量全部都不使用的话是没有内存泄漏的，但是有一个被调用他就会被去指向过去
 */
function foo() {
    var name = 'xxxx'
    var age = 'xxxx'
    return function () {
        console.log(age);
    }
}

const func = foo()
func()