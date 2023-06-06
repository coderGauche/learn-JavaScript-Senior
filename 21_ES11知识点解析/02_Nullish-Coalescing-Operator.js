/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 19:27:48
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 20:46:35
 * @FilePath: /learn-JavaScript-Senior/21_ES11知识点解析/02_Nullish-Coalescing-Operator.js
 */
let foo
/**
 * ||和??相似的
 * 区别就是？？可以判断0和‘’是值不会搞后面重新赋值
 */
/**
 * 空值合并运算符
 * || 的话  0或者''都算没有
 * 用??  只有undefined或者null才会赋值后面
 */
const foo1 = ''  //0
// const bar = foo1 || 'xxxx'  //xxxxx
const bar = foo1 ?? 'xxxx'   //''  0

// console.log(foo); //undefined
console.log(bar); //xxxx

