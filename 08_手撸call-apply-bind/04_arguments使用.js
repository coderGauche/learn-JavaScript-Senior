/*
 * @Author: Gauche楽
 * @Date: 2023-05-23 18:18:28
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-23 18:29:24
 * @FilePath: /learn-JavaScript-Senior/08_手撸call-apply-bind/04_arguments使用.js
 */
function foo(num1, num2, num3) {
    //类似数组对象中（长得像数组，本质是对象）arguments   放到vo中Ao对象
    /**
     * 常见操作三个
     * 1.获取参数长度arguments。lenght
     * 2.根据索引值获取某个参数arguments[2]    20
     * 3.arguments.callee  获取当前arguments所在的函数
     * arguments不能使用foreach/map遍历工具，只能手动I++
     * 作用域中
     * AO={
     * name:undefined
     * arguments:Arguments(3) [10, 20, 30, callee: ƒ, Symbol(Symbol.iterator): ƒ]
     * }
     */
    console.log(arguments.length);
    console.log(arguments[2]);
    console.log(arguments.callee);
    // arguments.callee()

    console.log(num1, num2, num3);
}


foo(10, 20, 30)