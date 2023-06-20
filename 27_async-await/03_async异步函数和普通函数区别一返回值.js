/*
 * @Author: Gauche楽
 * @Date: 2023-06-16 21:12:12
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-16 21:12:35
 * @FilePath: /learn-JavaScript-Senior/27_async-await/03_async异步函数和普通函数区别.js
 */
async function foo(params) {
    console.log('进程1');
    console.log('进程2');
    console.log('进程3');
    return '1111'
}


foo().then(res => {
    console.log(res);
})
console.log('进程4');
console.log('进程5');