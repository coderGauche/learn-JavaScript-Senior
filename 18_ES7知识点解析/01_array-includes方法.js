/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 02:08:01
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 02:13:40
 * @FilePath: /learn-JavaScript-Senior/18_ES7知识点解析/01_array-includes方法.js
 */
const names = ['111', '222', '333', '4444']

console.log(names.indexOf('111') !== -1);

//第二个参数是从索引第几个开始查找
console.log(names.includes('333', 1));
//他两之间的区别  NaN

const names1 = ['111', '222', '333', '4444', NaN]

console.log(names1.indexOf(NaN) !== -1); //他是找不到NaN   false

console.log(names1.includes(NaN));//找的到NaN   true
