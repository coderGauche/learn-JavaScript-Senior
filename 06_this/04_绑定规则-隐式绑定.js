/*
 * @Author: Gauche楽
 * @Date: 2023-05-22 01:52:34
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-22 03:12:26
 * @FilePath: /learn-JavaScript-Senior/05_this/04_绑定规则-显示绑定.js
 */
/**
 * 隐式绑定  obj.fn()
 * obj对象会被js引擎绑定到fn函数中的this里面   隐式绑定上去的  自动
 */
var obj = {
    name: 'kobi',
    age: 29,
    foo: function () {
        console.log(this);
    }
}
obj.foo()  //obj