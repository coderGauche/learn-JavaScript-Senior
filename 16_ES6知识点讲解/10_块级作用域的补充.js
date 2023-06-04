/*
 * @Author: Gauche楽
 * @Date: 2023-06-04 23:29:54
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-04 23:35:49
 * @FilePath: /learn-JavaScript-Senior/16_ES6知识点讲解/10_块级作用域的补充.js
 */
const names = ['x1', 'x2', 'x3']


/**
 * var let const怎么选呢
 * var 没有块级作用域 在外侧也可以去用i，有风险重命名。所以一般不用var
 * let  有块级作用域，不可在在外部使用，放心使用
 * const   const的特点无法修改值 需要i++，不能用
 */

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}


{
    var i = 0;
    console.log(names[i]);
}

{
    var i = 1;
    console.log(names[i]);
}

{
    var i = 2;
    console.log(names[i]);
}



/**
 * var let const怎么选呢
 * var 没有块级作用域 在外侧也可以去用i，有风险重命名。所以一般不用var
 * let  有块级作用域，不可在在外部使用，放心使用
 * const   c不需要修改值，可以使用
 */
for (var item of names) {
    console.log(item);
}


{
    var item = 'x1';
    console.log(item);
}

{
    var item = 'x2';
    console.log(item);
}

{
    var item = 'x3';
    console.log(item);
}