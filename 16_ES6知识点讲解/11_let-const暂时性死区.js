/*
 * @Author: Gauche楽
 * @Date: 2023-06-04 23:37:34
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-04 23:44:42
 * @FilePath: /learn-JavaScript-Senior/16_ES6知识点讲解/11_let-const暂时性死区.js
 */
/**
 * 暂时性死区:
 * 在代码块中，通过let/const声明的变量，在声明之前，变量是无法访问的
 */

var foo = 'xxx'

if (true) {
    console.log(foo);
    let foo = 'xxq'  // const foo ='xxq'
}

function fn(params) {
    console.log(foo);
    const foo = 'xxq'  // let foo ='xxq'
}