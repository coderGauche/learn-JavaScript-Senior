/*
 * @Author: Gauche楽
 * @Date: 2023-05-17 03:51:30
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-17 06:02:55
 * @FilePath: /learn-JavaScript-Senior/01_函数中this指向/03_execution_code(函数).js
 */
var name = 'wzf'  //name在window上就有

foo()
function foo(params) {
    console.log(name)
}

// foo()

var name1 = 20
var name2 = 30
var result = name1 + name2

// console.log(result);
// console.log(window);
