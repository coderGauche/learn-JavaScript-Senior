/*
 * @Author: Gauche楽
 * @Date: 2023-05-23 18:41:00
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-23 18:52:34
 * @FilePath: /learn-JavaScript-Senior/08_手撸call-apply-bind/06_slice函数的实现.js
 */
Function.prototype.ZFSlice = function (start, end) {
    var fn = this
    var arr = []
    start = start || 0
    end = end || fn.length
    for (var i = start; i < end; i++) {
        arr.push(this[i])
    }
    return arr
}



// const p1 = Function.prototype.ZFSlice.call(['aaa', 'bbbb', 'cccc'], 1, 3);
const p1 = Function.prototype.ZFSlice.call(['aaa', 'bbbb', 'cccc']);
const p2 = [].slice.call(['aaa', 'bbbb', 'cccc']);
// console.log(p1);
console.log(p2);