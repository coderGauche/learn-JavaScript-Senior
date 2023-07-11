/*
 * @Author: Gauche楽
 * @Date: 2023-06-20 16:40:57
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-20 19:44:55
 * @FilePath: /learn-JavaScript-Senior/28_事件循环-队列/02_宏任务和微任务.js
 */
/**
 * 宏任务：Ajax，setTimeout，setInterval,DOM箭头，UI Rendering这些函数可以在页面加载完成后自动执行。
 * 微任务：Promise的then回调，ququeMIcotask(）等
 * 事件循环对于两个队列的优先级是怎么样的呢
 * main script中的代码先执行，
 * 在执行任何一个宏任务之前（不是队列是宏任务），都会先查看微任务队列中是否有任务需要执行
 * 宏任务执行前，必须保证微任务队列是空的都执行完了，
 * 如果还有，name优先级执行微任务队列中的任务。
 */

function foo(params) {

}

foo()// 这就是main script 顶层代码


// 像下面这些都是需要执行队列

Promise((resolve, reject) => {
    resolve('1111')
}).then(res => {

})

setTimeout(() => {

}, 10000);

//添加微任务
queueMicrotask(() => {

})