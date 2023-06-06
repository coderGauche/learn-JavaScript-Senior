/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 19:48:01
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 19:49:54
 * @FilePath: /learn-JavaScript-Senior/21_ES11知识点解析/05_for-in的标准化.js
 */
const obj = {
    name: 'xxx',
    age: 18
}


const names = [1, 2, 3, 4]

//遍历对象
for (const key in obj) {
    console.log(key);
}


//遍历数组
for (const key of names) {
    console.log(key);
}