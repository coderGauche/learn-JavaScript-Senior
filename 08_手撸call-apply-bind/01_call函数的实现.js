/*
 * @Author: Gauche楽
 * @Date: 2023-05-22 23:45:37
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-23 16:06:51
 * @FilePath: /learn-JavaScript-Senior/08_手撸call-apply-bind/01_call函数的实现.js
 */
Function.prototype.Gycall = function (thisArg, ...argArray) {
    console.log(this);
    //在这里可以执行调用的那个函数（foo）
    // console.log(thisArg, 'thisArg');
    // 1.获取
    var fn = this
    thisArg = thisArg ? Object(thisArg) : window
    // 2.调用
    thisArg.fn = fn
    var result = thisArg.fn(...argArray)
    delete thisArg.fn

    return result
}


var fnc = {
    name: 'xxx',
    age: 18,
    foo: function (num1, num2) {
        console.log(this, num1, num2);
        return num1 + num2
    }
}


function foo(params) {
    console.log(this, 'foo');
}


var result = fnc.foo.Gycall({ akl: 'xxx' }, 10, 20)
console.log(result);
// fnc.foo.Gycall(123)
// fnc.foo.Gycall('123')
// fnc.foo.Gycall(null)
// fnc.foo.Gycall(undefined)