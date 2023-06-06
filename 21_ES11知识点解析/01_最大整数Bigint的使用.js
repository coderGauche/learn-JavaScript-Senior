/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 19:01:35
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 19:13:17
 * @FilePath: /learn-JavaScript-Senior/21_ES11知识点解析/01_最大数字Bigint的使用.js
 */
//ES11之前MAX_SAFE_INTEGER
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt); //9007199254740991
console.log(maxInt + 1); //9007199254740992
console.log(maxInt + 2); //9007199254740992

//ES11之后
const maxInt1 = 90071992547409910099999999999n
console.log(maxInt1 + 1n);


//手动转化
const num = 100
console.log(maxInt1 + BigInt(num)); 90071992547409910100000000099n


//不要这么去用  数字可能不正确
const smallNum = Number(maxInt1)
console.log(smallNum);