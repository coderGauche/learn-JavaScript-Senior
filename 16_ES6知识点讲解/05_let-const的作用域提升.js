/*
 * @Author: Gauche楽
 * @Date: 2023-06-02 19:04:03
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-02 19:16:33
 * @FilePath: /learn-JavaScript-Senior/16_ES6知识点讲解/05_let-const的作用域提升.js
 */
/**
 * let和const么有作用域提升的
 * 这些变量会被创建在包含他们的词汇环境被实例化时，但是不能访问他们，知道词法绑定呗求值
 * 在定义变量之前无法访问，确实实例化了，只有赋值才能访问
 */
// console.log(foo);
// let foo = 'foo'
// console.log(foo);
// const foo = 'foo'