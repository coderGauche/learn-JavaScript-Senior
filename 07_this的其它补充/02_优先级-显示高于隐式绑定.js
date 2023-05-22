/*
 * @Author: Gauche楽
 * @Date: 2023-05-22 18:05:01
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-22 18:12:34
 * @FilePath: /learn-JavaScript-Senior/07_this的其它补充/02_优先级-显示高于隐式绑定.js
 */
var obj = {
    name: 'kobi',
    age: 29,
    foo: function () {
        console.log(this);
    }
}

/**
 * 默认绑定等级最低
 * call/apply的显示绑定高于隐式绑定
 * bind高于隐式绑定
 */
obj.foo()
obj.foo.call(obj)
obj.foo.apply('aaa')


var bar = obj.foo.bind('cba')

bar()

//显示绑定和隐式绑定的比拼  结果bind高于隐式绑定
function foo1(params) {
    console.log(this);
}

var obj1 = {
    name: 'xxx',
    foo: foo1.bind('zzz')
}


obj1.foo()