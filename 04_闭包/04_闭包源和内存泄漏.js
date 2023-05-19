/*
 * @Author: Gauche楽
 * @Date: 2023-05-18 18:55:31
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-18 21:52:25
 * @FilePath: /learn-JavaScript-Senior/04_闭包/04_闭包源.js
 */


/**
 * 闭包的定义：
 * 函数调用外部所关联的自由变量都是闭包
 * 创建函数就生成了闭包
 */
/**
 * 内存泄漏：
 * 直接等于null
 * 为什么产生内存泄漏呢 因为闭包特性会引用周围的自由变量一般看来说执行过的VO会被销毁掉，
 * 但是闭包特性就是在函数调用外部自由变量的时候函数的AO指向了全局变量，有了一层指向的关系所以
 * 就出现了泄漏改释放掉没有释放  解决就是等于null就好了
 */
function foo(params) {
    var name = 'xxx'
    function bar(params) {
        console.log('bar', name);
    }
    return bar
}


const func = foo()

func()



var name1 = 'xxx'
function test(params) {
    console.log('bar', name1);
}


function test1(params) {
    console.log('bar');
}