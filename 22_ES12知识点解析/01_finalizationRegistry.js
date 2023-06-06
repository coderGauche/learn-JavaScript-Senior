/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 19:53:44
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 20:12:54
 * @FilePath: /learn-JavaScript-Senior/22_ES12知识点解析/01_finalizationRegistry.js
 */

/**
 * 注册在finalizationRegistry被销毁info
   注册在finalizationRegistry被销毁obj
 */

const finalizationRegistry = new FinalizationRegistry(value => {
    console.log('注册在finalizationRegistry被销毁' + value);
})
let obj = { name: 'xxx' }
let info = { name: 'xxx' }

finalizationRegistry.register(obj, 'obj')
finalizationRegistry.register(info, 'info')

obj = null
info = null