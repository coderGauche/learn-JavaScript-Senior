/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 18:38:15
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 18:52:35
 * @FilePath: /learn-JavaScript-Senior/20_ES10知识点解析/02_frimEntries的使用.js
 */
/**
 * fromEntries传入的是可迭代的对象
 *  { 'name' => 'why', 'age' => '18', 'height' => '1.88' }
 * [ [ 'name', 'xxxx' ], [ 'age', 19 ], [ 'height', 1.88 ] ]
 */
const obj = {
    name: 'xxxx',
    age: 19,
    height: 1.88
}



const entries = Object.entries(obj)
console.log(entries); //[ [ 'name', 'xxxx' ], [ 'age', 19 ], [ 'height', 1.88 ] ]


const newObj = {}

for (const entry of entries) {
    newObj[entry[0]] = entry[1]
}


console.log(newObj); //{ name: 'xxxx', age: 19, height: 1.88 }


console.log(Object.fromEntries(entries)); //{ name: 'xxxx', age: 19, height: 1.88 }


const urQuery = 'name=why&age=18&height=1.88'

const newQuery = new URLSearchParams(urQuery) //URLSearchParams { 'name' => 'why', 'age' => '18', 'height' => '1.88' }
console.log(newQuery);

for (const params of newQuery) {
    console.log(params);
    /**
     * [ 'name', 'why' ]
[ 'age', '18' ]
[ 'height', '1.88' ]
     */
}

console.log(Object.fromEntries(newQuery)); //{ name: 'why', age: '18', height: '1.88' }
