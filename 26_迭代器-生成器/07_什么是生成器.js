/*
 * @Author: Gauche楽
 * @Date: 2023-06-16 03:45:42
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-16 03:49:02
 * @FilePath: /learn-JavaScript-Senior/26_迭代器-生成器/07_什么是生成器.js
 */
function* foo(params) {
    console.log('第一段代码');
    yield
    console.log('第二段代码');
    yield
    console.log('第三段代码');
    yield
    console.log('结束');
}

//是一个特殊的迭代器
const p1 = foo()
p1.next() //第一段代码
p1.next() //第二段代码
p1.next() //第三段代码