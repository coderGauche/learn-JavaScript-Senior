/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 16:36:49
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 16:39:51
 * @FilePath: /learn-JavaScript-Senior/19_ES8知识点解析/02_Object的entrles获取.js
 */
const obj = {
    name: 'xxx',
    age: 18
}



console.log((Object.entries(obj)));
const objEntries = Object.entries(obj)
objEntries.forEach(item => {
    console.log(item[0], item[1]); //name xxx    name xxx
})


console.log(Object.entries([1, 2, 3]));   //[ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ] ]
console.log(Object.entries('aaaaa'));
/**
 * [
  [ '0', 'a' ],
  [ '1', 'a' ],
  [ '2', 'a' ],
  [ '3', 'a' ],
  [ '4', 'a' ]
]
 */