/*
 * @Author: Gauche楽
 * @Date: 2023-06-02 17:47:36
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-02 17:54:39
 * @FilePath: /learn-JavaScript-Senior/16_ES6知识点讲解/01_字面量增强写法.js
 */
var userName = 'xxx'
var age = 18
var obj = {
    //属性简写 Property Shorthand
    userName,
    age,
    //方法简写 Method Shorthand
    foo: function (params) {

    },
    foo: () => {

    },
    foo() {

    },
    //计算属性名 Computed Property Names
    [age + 188]: age

}