/*
 * @Author: Gauche楽
 * @Date: 2023-05-18 11:24:39
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-18 11:46:33
 * @FilePath: /learn-JavaScript-Senior/04_闭包/03_数组里的函数使用.ts
 */
const arr = [2, 10, 15, 20];

const aa = arr.filter((e) => e % 2 === 0);
// console.log(aa);

const ccc = arr.reduce((pre, e) => {
  return pre + e;
}, 0);

console.log(ccc);
