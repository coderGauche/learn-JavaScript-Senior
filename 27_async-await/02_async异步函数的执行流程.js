/*
 * @Author: Gauche楽
 * @Date: 2023-06-16 21:11:02
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-16 21:11:23
 * @FilePath: /learn-JavaScript-Senior/27_async-await/02_async异步函数的执行流程.js
 */
//和普通的函数一样
async function foo(params) {
    console.log('进程1');
    console.log('进程2');
    console.log('进程3');
}


foo()
console.log('进程4');
console.log('进程5');

