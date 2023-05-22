/*
 * @Author: Gauche楽
 * @Date: 2023-05-22 18:39:04
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-22 18:44:06
 * @FilePath: /learn-JavaScript-Senior/07_this的其它补充/05_忽略显示绑定.js
 */
var obj = {
    name: 'kobi',
    age: 29,
    foo: function () {
        console.log(this);
    }
}


function foo(params) {
    console.log(this);
}



/**
 * 传入undefined or null  返回的是window
 * 内部做了处理当  undefined or null   会自动将this绑定成全局对象
 */
obj.foo.call(undefined)
obj.foo.apply(null)
foo.call(undefined)
foo.apply(null)

var bar = foo.bind(undefined)
bar()