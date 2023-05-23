/*
 * @Author: Gauche楽
 * @Date: 2023-05-23 19:00:12
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-23 19:04:00
 * @FilePath: /learn-JavaScript-Senior/08_手撸call-apply-bind/07_箭头函数没有arguments.js
 */
/**
 * 箭头函数的arguments在node里是有的
 * 因为箭头函数线上查找就到window了
 */
var foo = () => {
    console.log(arguments);
}

function fo(params) {
    return () => {
        console.log(arguments);
    }
}


var p1 = fo(122)

p1()