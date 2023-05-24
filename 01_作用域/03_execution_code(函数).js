/*
 * @Author: Gauche楽
 * @Date: 2023-05-17 03:51:30
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-24 15:48:38
 * @FilePath: /learn-JavaScript-Senior/01_作用域/03_execution_code(函数).js
 */
var name = 'wzf'  //name在window上就有

foo()
function foo(params) {
    console.log(name)
}


//这是个大括号不是对象
// { 
//     var name = 'xxxx'
//     var age = 18
// }

/**
 * 作用域就两种：
 * 全局作用域
 * 函数作用域
 */

// foo()

var name1 = 20
var name2 = 30
var result = name1 + name2

// console.log(result);
// console.log(window);
