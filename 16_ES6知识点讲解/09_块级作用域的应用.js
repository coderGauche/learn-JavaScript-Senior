/*
 * @Author: Gauche楽
 * @Date: 2023-06-04 11:42:51
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-04 11:50:51
 * @FilePath: /learn-JavaScript-Senior/16_ES6知识点讲解/09_块级作用域的应用.js
 */
const buttons = document.getElementsByTagName('button')


// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = function (params) {
//         console.log(i); //输出永远都是3
//         /**
//          * 原因：是因为var没有块级作用域，当i找不到的时候会向上查找就到了全局作用域，一开始i是0，一直小于length的情况下
//          * 到length数量停止了，所以一直都是输出三
//          */
//     }
// }
//解决var不是块级作用域的问题
// for (var i = 0; i < buttons.length; i++) {
//     (function (n) {
//         buttons[n].onclick = function (params) {
//             console.log(n);//正常的连续123
//             /**
//              * 原因：给他做了个立即输出传参才导致他在方法内可以拿到i，因为函数是块级作用域 也利用递归
//              */
//         }
//     })(i)
// }
//let和const就没有任何问题
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (params) {
        console.log(i);//正常的连续123
    }
}
