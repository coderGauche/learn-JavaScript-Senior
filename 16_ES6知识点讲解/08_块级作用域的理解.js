/*
 * @Author: Gauche楽
 * @Date: 2023-06-04 10:45:09
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-04 22:34:34
 * @FilePath: /learn-JavaScript-Senior/16_ES6知识点讲解/08_块级作用域的理解.js
 */
{
    var a = '1'
    // let b = '2' 
    const c = 'c'
    function foo(params) {
        console.log('foo');
    }
    class Person { }
}


console.log(a);
// console.log(b); //块级作用域拦截 b is not defined
// console.log(c);  //块级作用域拦截 c is not defined
foo() //如果纯兼容es6的话有块级作用域，但是浏览器兼容es6之前版本  谷歌浏览器处理了兼容，所以现在是没问题
// var p = new Person()  //块级作用域拦截 Person is not defined
// console.log(p);