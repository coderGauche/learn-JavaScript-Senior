var names = ['01', '02', '03']
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this._address = 'xxxq'
    }

    runing() {
        console.log(this.name, 'runing');
    }
    eating() {
        console.log(this.name, 'runing');
    }
    //访问器
    get address() {
        return this._address
    }
    //类的静态方法（类方法） 不通过new  直接使用原型去调用
    static randomPerson() {
        var nameIndex = Math.floor(Math.random() * names.length)
        var name = names[nameIndex]
        var age = Math.floor(Math.random() * 100)
        return new Person(name, age)
    }
}


var p = new Person('xxxx', 18)
// console.log(p.name);
// console.log(p.age);
// console.log(p.height);
// p.eating()
// p.runing()
// console.log(Object.getOwnPropertyDescriptors(Person.prototype));
// console.log(p.address);
for (var i = 0; i < 50; i++) {
    console.log(Person.randomPerson());
}