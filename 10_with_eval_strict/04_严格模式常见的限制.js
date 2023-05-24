/*
 * @Author: Gauche楽
 * @Date: 2023-05-24 16:31:16
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-24 16:45:02
 * @FilePath: /learn-JavaScript-Senior/10_with_eval_strict/04_严格模式常见的限制.js
 */

// 01.意外的创建全局变量
message = 'xxxx'
// 02.不允许函数有相同的参数名称
function foo(x, y, x) {
    console.log(x, y, x);
}
foo(10, 20, 30)
// 03.静默错误
true.foo = '123'
NaN = 123

var obj = {}
Object.defineProperty(obj, 'name', {
    configurable: false, //不能配置，不让删
    writable: false, //不可写的，只能读不能改写
    value: 'why'
})

// 04.不允许使用原先的八进制格式  0的八进制格式
var name = 0o123 //八进制
var name = 0x123 //十六进制
var name = 0b100 //二进制


// 05.不允许使用whit
// 06.不允许使用eval   eval函数不会向上引用变量
var jsString = 'var Message= "xxxx";console.log(Message)'
eval(jsString)


//07严格模式下的tis