/*
 * @Author: Gauche楽
 * @Date: 2023-06-12 15:07:22
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-12 15:22:12
 * @FilePath: /learn-JavaScript-Senior/25_Promised的使用/02_Promise的基本使用.js
 */
function foo(code) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (code === 200) {
                resolve('请求成功')
            } else {
                reject('请求失败')
            }

        }, 2000);
    })
}

foo(500).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})