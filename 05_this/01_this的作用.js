/*
 * @Author: Gauche楽
 * @Date: 2023-05-19 16:35:52
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-19 16:38:31
 * @FilePath: /learn-JavaScript-Senior/05_this/01_this的作用域.js
 */
var obj = {
    name: 'xxxx',
    eating: function () {
        console.log(this.name, 'eating');
    },
    running: function () {
        console.log(this.name, 'running');
    }
}


obj.eating()
obj.running()
