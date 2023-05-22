/*
 * @Author: Gauche楽
 * @Date: 2023-05-22 18:45:53
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-22 18:54:02
 * @FilePath: /learn-JavaScript-Senior/07_this的其它补充/06_简介函数引用绑定.js
 */
var obj = {
    name: 'kobi',
    age: 29,
    foo: function () {
        console.log(this);
    }
}

var obj2 = {
    name: 'kobi2',
};


// obj2.foo = obj.foo
// obj2.foo()

//属于独立函数调用
(obj2.foo = obj.foo)()