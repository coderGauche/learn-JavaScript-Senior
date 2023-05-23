/*
 * @Author: Gauche楽
 * @Date: 2023-05-23 21:47:54
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-23 22:04:11
 * @FilePath: /learn-JavaScript-Senior/09_纯函数-柯里化-组合/01_什么是纯函数.js
 */
/**
 * 相同输入一定产生相同输出
 * 在执行过程中不会产生任何的副作用
 * 在里面打印严格意义上不是纯函数，不允许有额外的操作，但是没有造成bug  很大的伤害可以算是纯函数
 */


/**
 * 纯函数案例
 */
function foo(num1, num2) {
    return num1 + num2 * 2 + num2
}

//修改值，但没有破坏结构
function test(params) {
    return {
        ...params,
        age: 30
    }
}

test(obj)

var name = 'aa'
/**
 * 不是纯函数案例
 */
//不是纯函数，修改外部的参数
function foo1(params) {
    console.log('xxxxx');
    name = 'xxxx'
}

foo1()
console.log(name);

//不是纯函数，修改外部的参数
function foo2(info) {
    console.log('xxxxx');
    info.anme = 'xxxx'
}

foo1({ name: 'xxxx' })

//不是纯函数，修改传入的参数
function baz(info) {
    info.name = 'xx'
}

var obj = { name: 'xxxa', age: 10 }
baz(obj)
console.log(obj);

