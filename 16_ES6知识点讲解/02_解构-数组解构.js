/*
 * @Author: Gauche楽
 * @Date: 2023-06-02 17:55:37
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-02 18:22:07
 * @FilePath: /learn-JavaScript-Senior/16_ES6知识点讲解/02_解构-数组解构.js
 */
var nums = [1, 2, 3, 4]

var [i1, i2, i3, i4] = nums

console.log(i1);


// 解构后面元素
var [, , , a1] = nums

//解构出一个后面放到新数组
var [a2, ...an] = nums

//解构的默认值
var [i1, i2, i3, i4 = 2] = nums