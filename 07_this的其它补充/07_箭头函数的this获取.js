/*
 * @Author: Gauche楽
 * @Date: 2023-05-22 18:57:29
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-22 19:13:27
 * @FilePath: /learn-JavaScript-Senior/07_this的其它补充/07_箭头函数的this绑定.js
 */
/**
 * 箭头函数不使用this的四种标准规则
 * new不能和this使用
 * 箭头函数不管怎么绑定都不会绑定this的
 * 找上层作用域
 */

var fop = () => {
    console.log(this);
}

var obj = {
    name: 'kobi',
    age: 29,
    foo: fop,
    list: [],
    getData: function () {
        // //我们之前没有箭头函数是这么写的，通过变量去拿上层作用域
        // var that = this
        // setTimeout(function() {
        //     that.list = [1,2.3]
        // }, 2000);
        //箭头函数的出现 他的this规则就是找上层作用域本身是没有this指向是window  可以直接找到上层作用域
        setTimeout(() => {
            this.list = [1, 2.3]
            console.log(this);
        }, 1000)
    }
}

obj.getData()