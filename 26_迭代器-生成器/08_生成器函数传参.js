/*
 * @Author: Gauche楽
 * @Date: 2023-06-16 03:59:11
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-16 04:13:48
 * @FilePath: /learn-JavaScript-Senior/26_迭代器-生成器/08_生成器函数传参.js
 */
function* foo(params) {
    console.log('函数开始执行');

    const value = 100 + params
    console.log('第一段代码' + value);
    const n = yield '第一段代码';

    const value1 = 100 * n
    console.log('第二段代码' + value1);
    const n1 = yield '第二段代码';

    const value2 = 1000 * n
    console.log('第三段代码' + value2);
    const n2 = yield '第三段代码';

    console.log('结束');
    return '11111zxxx' + n2
}

//是一个特殊的迭代器
const generator = foo(9)


console.log(generator.next());
console.log(generator.next(10));
console.log(generator.next(20));
console.log(generator.next(30));


/**
 * 函数开始执行
第一段代码109
{ value: '第一段代码', done: false }
第二段代码1000
{ value: '第二段代码', done: false }
第三段代码10000
{ value: '第三段代码', done: false }
结束
{ value: '11111zxxx30', done: true }
 */