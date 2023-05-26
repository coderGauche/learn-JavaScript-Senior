/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 22:05:55
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 22:14:31
 * @FilePath: /learn-JavaScript-Senior/12_JS创建对象方案.js/05_构造函数的缺点.js
 */
/**
 * 缺点：
 * 构造函数内部的值是函数都是创建一个独立的对象实例，n个构造函数，那就很多浪费性能
 */
/**
 * 问题：fn1和fn2是不是同一个函数
 * console.log(fn1 === fn2);false  显然不是
 * 为什么呢？
 * 因为我们执行函数过程中，我们有定义个函数 他就会在内存里创建个新的对象等到第二次执行的时候第一个函数销毁掉，有创建第二个函数对象
 */
function foo(params) {
    function bar(params) {

    }
    return bar
}


var fn1 = foo()
var fn2 = foo()


console.log(fn1 === fn2);