/*
 * @Author: Gauche楽
 * @Date: 2023-06-16 02:11:20
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-16 02:20:28
 * @FilePath: /learn-JavaScript-Senior/26_迭代器-生成器/05_可迭代对象应用场景.js
 */
// 数组都是可迭代的，所以这种对象的函数也称为可迭代对象。
const obj = {
    names: ['a1', 'a2', 'a3'],
    [Symbol.iterator]: function () {
        let index = 0
        return {
            next: () => {
                if (index < this.names.length) {
                    return { done: false, value: this.names[index++] }
                } else {
                    return { done: true, value: undefined }
                }
            }
        }
    }
}

for (const key of obj) {
    console.log(key);
}

// 展开运算
console.log([...obj]);
console.log({ ...obj }); //不行

// 解构
const [name1, name2] = obj
const { name3, name4 } = { name1: 'xxx', name2: '3333' }  //不行

// 创建其他解构
console.log(new Set(obj));
console.log(Array, from(obj));

// 调用方法
Promise.all(obj).then(res => {
    console.log(res);
})