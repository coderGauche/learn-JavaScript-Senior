/*
 * @Author: Gauche楽
 * @Date: 2023-05-24 15:58:06
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-24 16:05:57
 * @FilePath: /learn-JavaScript-Senior/10_with_eval_strict/02_eval函数.js
 */
// var Message= 'xxxx'
/**
 * eval：可以执行字符串代码
 * 不建议开发的时候使用
 * 可读性差
 * 是个字符串会造成恶意篡改
 * 必须经过js解释器，不被js引擎优化
 */

var jsString = 'var Message= "xxxx";console.log(Message)'

eval(jsString)