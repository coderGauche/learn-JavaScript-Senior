/*
 * @Author: Gauche楽
 * @Date: 2023-06-12 14:52:41
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-12 22:57:23
 * @FilePath: /learn-JavaScript-Senior/25_Promised的使用/01_异步请求处理方式.js
 */
/**
 * 早期处理发送请求数据需要返回数据的实现采用的时候回调函数
 * 不过是有弊端的
 * 1. 在使用回调函数时，回调函数不能保持处理请求结果的顺序
 * 不如直接在处理结果的方式进行处理
 * 这时候就需要使用异步编程了
 * 异常处理方式也可以使用该函数来处理请求结果
 * 但是这种方式的好处是可以保持处理结果的顺序，并且当结果被处理时，
 * 只需要保存处理后的结果即可。
 * 
 */
function foo(code, sucessFn, errorFn) {
    setTimeout(() => {
        if (code === 200) {
            sucessFn('请求成功')
        } else {
            errorFn('请求失败')
        }

    }, 2000);
}

foo(200, (res) => {
    console.log(res);
}, (err => {
    console.log(err);
}))