/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 20:35:45
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 20:46:06
 * @FilePath: /learn-JavaScript-Senior/22_ES12知识点解析/03_logical-assignment-operators.js
 */
/**
 * ||和??相似的
 * 区别就是？？可以判断0和‘’是值不会搞后面重新赋值
 */
// ||= 逻辑或赋值运算
let message = undefined
message = message || 'default value'
message ||= 'default value'
console.log(message);

// &&= 逻辑与赋值运算
const obj = {
    name: 'xxx',
    age: 18,
    foo: function (params) {
        console.log('foo');
    }
}
// obj.name = obj&&obj.name
obj.name &&= obj.name
// obj.foo &&= obj.foo()

// ??= 逻辑空赋值运算
let foo = null
foo ??= '默认值'
console.log(foo);