/*
 * @Author: Gauche楽
 * @Date: 2023-07-11 17:28:03
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-11 17:38:26
 * @FilePath: /learn-JavaScript-Senior/31_手撸防抖/01_第三方库实现.js
 */
const ipt = document.querySelector('.ipt')
let connter = 0
function inputChange(fns,) {
    console.log('请求次数' + connter++);
}
ipt.oninput = _.debounce(inputChange, 1000)
console.log(ipt);