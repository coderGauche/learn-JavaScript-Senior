/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 19:36:52
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 19:40:00
 * @FilePath: /learn-JavaScript-Senior/21_ES11知识点解析/03_Optional-Chaining.js
 */
const info = {
    name: 'xxx',
    age: 18,
    // friend: {
    //     name: 'lilei',
    //     girFriend: {
    //         name: 'hmm'
    //     }
    // }
}



if (info.friend && info.friend.girFriend) {
    console.log(info.friend.girFriend.name);
}


console.log(info.friend?.girFriend?.name ?? 'defult value');