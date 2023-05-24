/*
 * @Author: Gauche楽
 * @Date: 2023-05-24 16:45:45
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-24 17:00:31
 * @FilePath: /learn-JavaScript-Senior/10_with_eval_strict/05_严格模式下的this.js
 */
"use strict"

/**
 * 在严格模式下，自执行函数（默认绑定）会指向undefined
 */

function foo(params) {
    console.log(this);
}

var obj = {
    name: 'xxxx',
    foo: foo
}

// obj.foo()


var bar = obj.foo
// bar()


// foo()


/**
 * setTimeout的this
 */

//非严格/严格模式：上层作用域   一样的
// setTimeout(() => {
//     console.log(this);
// }, 1000);

//非严格：window   严格模式：window  黑盒子内部代码执行过程是不知道的
//以为是自执行函数  其实内部调用fn.apply绑定this 绑定的是window
setTimeout(function () {
    console.log(this);
}, 1000)