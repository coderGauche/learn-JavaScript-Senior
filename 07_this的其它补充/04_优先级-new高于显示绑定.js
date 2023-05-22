/*
 * @Author: Gauche楽
 * @Date: 2023-05-22 18:15:36
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-22 18:19:44
 * @FilePath: /learn-JavaScript-Senior/07_this的其它补充/04_优先级-new高于显示绑定.js
 */
/**
 * 结论new关键字不能喝apply/call一起使用
 * new > 显示绑定>隐式绑定>默认绑定
 */

// new bind 

function foo(params) {
    console.log(this);
}


var bar = foo.bind('aaa')
var obj = new bar()