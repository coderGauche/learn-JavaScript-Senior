/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 19:41:54
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 19:47:12
 * @FilePath: /learn-JavaScript-Senior/21_ES11知识点解析/04_获取全局对象Global-this.js
 */
//获取某一个环境下的全局对象（global this）

// console.log(window);
console.log(globalThis); //浏览器上和node上都可
// console.log(this); //浏览器上
// console.log(global); //node上