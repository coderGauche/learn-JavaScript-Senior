/*
 * @Author: Gauche楽
 * @Date: 2023-05-17 05:55:17
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-17 06:15:07
 * @FilePath: /learn-JavaScript-Senior/01_函数中this指向/04_execution_code(函数嵌套).js
 */
var message = 'wzf'  //name在window上就有


/**
 * foo的父级作用域是GO
 * bar的父级作用域是GO
 * 在定义的时候就已经生成了
 */
function foo() {

    console.log(message);
}

function bar(params) {
    var message = 'xxx'
    foo()
}
foo()
