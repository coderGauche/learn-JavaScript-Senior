/*
 * @Author: Gauche楽
 * @Date: 2023-05-22 04:28:22
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-22 04:32:20
 * @FilePath: /learn-JavaScript-Senior/05_this/06_bind.js
 */
var obj = {
    name: 'kobi',
    age: 29,
    foo: function () {
        console.log(this);
    }
}

/**
 * 默认绑定和显示绑定bind冲突的话  优先级（显示绑定）
 */

function foo(num1, num2) {
    console.log(num1 + num2, this);
}

var newFoo = foo.bind('bind', 10, 20)

newFoo()