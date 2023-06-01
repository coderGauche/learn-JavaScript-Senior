/*
 * @Author: Gauche楽
 * @Date: 2023-05-24 16:22:07
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-01 17:40:51
 * @FilePath: /learn-JavaScript-Senior/10_with_eval_strict/03_开启严格模式.js
 */
/**
 * 两种开启严格模式
 * 在顶部写 "use strict"
 * 在方法顶部写 "use strict"
 */

"use strict"

message1 = 12

console.log(message);

//静默错误
true.foo = '123'



function foo(params) {
    "use strict"
    message1xx = 12
}

foo()