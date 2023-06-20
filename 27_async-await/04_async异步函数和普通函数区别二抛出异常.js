/*
 * @Author: Gauche楽
 * @Date: 2023-06-16 21:13:27
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-16 21:14:21
 * @FilePath: /learn-JavaScript-Senior/27_async-await/04_async异步函数和普通函数区别二抛出异常.js
 */
async function foo(params) {
    console.log('进程1');
    console.log('进程2');
    throw new Error('出错');
    console.log('进程3');
}


foo().catch(err => {
    console.log(err);
})
console.log('进程4');
console.log('进程5');