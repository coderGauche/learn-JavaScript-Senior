/*
 * @Author: Gauche楽
 * @Date: 2023-05-24 00:43:08
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-24 00:51:17
 * @FilePath: /learn-JavaScript-Senior/09_纯函数-柯里化-组合/05_柯里化-逻辑复的用02.js
 */
var log = date => type => msg => console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:${msg}`)

// log(new Date(), 'DEBUG', "查找到轮播图时间");
// log(new Date(), 'DEBUG', "查询菜单错误");
// log(new Date(), 'DEBUG', "查询数据的bug");

var nowLog = log(new Date())('DEBUG')
nowLog("查找到轮播图时间")
nowLog("查询菜单错误")
nowLog("查询数据的bug")
