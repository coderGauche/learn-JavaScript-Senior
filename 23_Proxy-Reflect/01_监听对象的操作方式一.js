/**
 * 使用defineProperty去监听对象的弊端
 * 获取和修改可以去监听，但是如果删除和薪资就无能为力
 * defineProperty并不是为了去监听一个完整的对象而存在
 */

let obj = {
    name: 'xxx',
    age: 18
}

for (const key in obj) {
    console.log(key);
    let v = obj[key]
    Object.defineProperty(obj, key, {
        set: (value) => {
            console.log(`存储了${key}的值为${value}`);
            v = value
        },
        get: () => {
            console.log(`获取了${key}的值为${v}`);
            return v
        },
    })
}


obj.name = 'xxx2'
obj.age = 19
console.log(obj.name);
console.log(obj.age);