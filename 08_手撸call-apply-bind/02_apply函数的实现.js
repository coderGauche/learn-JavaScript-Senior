/*
 * @Author: Gauche楽
 * @Date: 2023-05-23 16:05:36
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-23 18:15:48
 * @FilePath: /learn-JavaScript-Senior/08_手撸call-apply-bind/02_apply函数的实现.js
 */
Function.prototype.ZFapply = function (thisArg, argArry) {
    var fn = this  //fn值得是调用那个一个
    thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window //判断传进来的值有没有否则window
    thisArg.fn = fn  //这步操作为了this要去指定到我给他的第一个参数 ，参照apply的Api 
    argArray = argArray ? argArray : []
    var result = thisArg.fn(...argArry)  //然后调用fn的函数foo这个函数
    delete thisArg.fn //删除thisArg.fn避免他在返回的this里出现
    return result
}


function foo(num1, num2) {

    console.log(this, num1 + num2);
}

foo.apply('aaaa', [10, 20])
foo.apply(undefined, [10, 20])
foo.ZFapply('aaaa', [10, 20])
foo.ZFapply(undefined, [10, 20])