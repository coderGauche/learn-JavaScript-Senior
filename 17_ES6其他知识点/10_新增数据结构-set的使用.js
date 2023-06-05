/*
 * @Author: Gauche楽
 * @Date: 2023-06-05 10:15:35
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-05 10:47:10
 * @FilePath: /learn-JavaScript-Senior/17_ES6其他知识点/10_新增数据结构-set的使用.js
 */
const newSet = new Set()

newSet.add(1)
newSet.add(10)
newSet.add(100)
newSet.add(99)


//内存地址不一致，会存两个{}
newSet.add({})
newSet.add({})

//内存地址一致，会存一个{}
const obj = {}
newSet.add(obj)
newSet.add(obj)


// 去重
const arr = [10, 20, 30, 88, 99, 10]
console.log([...new Set(arr)]);

//遍历
new Set(arr).forEach(item => {
    // console.log(item);
})

for (const item of new Set(arr)) {
    // console.log(item);
}


//常见方法
newSet.delete(10)
console.log(newSet.has(99));
newSet.clear()
console.log(newSet.size);