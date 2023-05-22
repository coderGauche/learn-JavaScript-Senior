/*
 * @Author: Gauche楽
 * @Date: 2023-05-22 17:01:01
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-22 17:21:40
 * @FilePath: /learn-JavaScript-Senior/07_this的其它补充/一些函数的js分析.js
 */
//settimeout


function foo(fn, dura) {

}



// 1.
foo(setTimeout(() => {
    console.log(this);
}, 3000))

// setTimeout(function () {
// console.log(this); //window
// }, 2000);



// 2
//监听点击
const divBox = document.querySelector('.box')
divBox.onclick = function (params) {
    console.log(this); //隐式绑定  挂载到divbox上
}


divBox.addEventListener('click', function (params) {
    console.log(this);  //内部原理是fn.call(this)
})


//3 数组.forEach/map/fillter/find
var names = ['a', 'b', 'c']
names.forEach(function () {
    // console.log(this);  //forEach独立调用  第二个参数可以改变他的this指向  有做显示绑定
}, 'aaaa')

names.map(function () {
    // console.log(this);  //map独立调用  第二个参数可以改变他的this指向  有做显示绑定
}, 'aaaa')




