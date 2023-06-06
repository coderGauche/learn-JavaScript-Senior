/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 16:48:14
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 16:52:33
 * @FilePath: /learn-JavaScript-Senior/19_ES8知识点解析/03_Object的padStart和padEnd使用.js
 */
const text = 'Gauche'


const newText = text.padStart(10, '_').padEnd(14, '_')
console.log(newText); //____Gauche____


const textCard = '12635676548880'

const lasetCard = textCard.slice(-4)
const newCard = lasetCard.padStart(textCard.length, '*')
console.log(newCard); //**********8880