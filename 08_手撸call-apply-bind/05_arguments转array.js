/*
 * @Author: Gauche楽
 * @Date: 2023-05-23 18:29:55
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-23 18:57:31
 * @FilePath: /learn-JavaScript-Senior/08_手撸call-apply-bind/05_arguments转array.js
 */
function foo(num1, num2, num3) {
    //5种转换数组方案
    var newArry = Array.prototype.slice.call(arguments)
    var newArr1 = [].slice.call(arguments)
    var newArr2 = []
    for (var i = 0; i < arguments.length; i++) {
        newArr2.push(arguments[i])
    }
    var newArr3 = Array.from(arguments)
    var newArr4 = [...arguments]
    console.log(newArry);
    console.log(newArr1);
    console.log(newArr2);
    console.log(newArr3);
    console.log(newArr4);
    // console.log(num1, num2, num3);
}


foo(10, 20, 30)