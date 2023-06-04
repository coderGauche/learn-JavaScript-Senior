/*
 * @Author: Gauche楽
 * @Date: 2023-06-05 00:02:51
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-05 00:18:29
 * @FilePath: /learn-JavaScript-Senior/17_ES6其他知识点/02_标签模板字符串的使用.js
 */
const name = 'xxx'
const age = 18

function foo(num1, num2, num3) {
    console.log(num1, num2, num3);
}

/**
 * 标签模板字符串
 * 前面数组占一个参数，后面顺位
 */
foo`hello${name}world${age}xxx` //[ 'hello', 'world', 'xxx' ] xxx 18