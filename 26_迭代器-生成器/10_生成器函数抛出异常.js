/*
 * @Author: Gauche楽
 * @Date: 2023-06-16 04:15:03
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-16 04:28:05
 * @FilePath: /learn-JavaScript-Senior/26_迭代器-生成器/10_生成器函数抛出异常.js
 */
function* foo(params) {
    console.log('函数开始执行');

    const value = 100

    try {
        yield value
    } catch (error) {
        console.log('发生了异常', error);
    }



    const value1 = 200
    yield value1

}

//是一个特殊的迭代器
const generator = foo(9)


const p1 = generator.next()
console.log('p1', p1);
if (p1.value !== 200) {
    console.log(generator.throw('xxxx'))
}
console.log(generator.next());


/**
 * 函数开始执行
p1 { value: 100, done: false }
发生了异常 xxxx
{ value: 200, done: false }
{ value: undefined, done: true }
 */