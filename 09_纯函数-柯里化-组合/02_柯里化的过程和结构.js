/*
 * @Author: Gauche楽
 * @Date: 2023-05-23 23:49:09
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-23 23:56:55
 * @FilePath: /learn-JavaScript-Senior/09_纯函数-柯里化-组合/02_柯里化的过程和结构.js
 */
/**
 * 单一职责
 */
function add(x, y, z) {
    return x + y + z
}



var res = add(10, 20, 30)
console.log(res);



function sum(x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }
}

var res1 = sum(10)(20)(30)
console.log(res1);


var sum2 = x => y => z => x + y + z

var res2 = sum2(10)(20)(30)
console.log(res2);

