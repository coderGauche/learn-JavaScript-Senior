/*
 * @Author: Gauche楽
 * @Date: 2023-05-22 03:25:04
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-22 04:27:07
 * @FilePath: /learn-JavaScript-Senior/05_this/05_apply-call-bind.js
 */
function foo(params) {
    console.log(this);
}

/**
 * foo直接调用和call/apply调用的不同在于this绑定的不同
 * foo直接调用指向的是全局对象window
 * call和apply区别：调用带参数的传参方式不一样
 */
var obj = {
    name: 'kobi',
    age: 29,
    foo: function () {
        console.log(this);
    }
}
foo() //window
foo.call(obj) //{name: 'kobi', age: 29, foo: ƒ}
foo.apply(obj) //{name: 'kobi', age: 29, foo: ƒ}
foo.apply('aaa') //String {'aaa'}



function num(num1, num2) {
    console.log(num1 + num2, this);
}


num.call('call', 20, 30)
num.apply('apply', [20, 30])