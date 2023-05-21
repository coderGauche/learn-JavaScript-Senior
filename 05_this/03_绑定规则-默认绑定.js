/**
 * this指向什么，跟函数所处的位置没有关系
 * 跟函数被调用的方式有关系
 */
var obj = {
    name: 'kobi',
    age: 29,
    foo: function () {
        console.log(this);
    }
}


var fn = obj.foo
fn()  //window


obj.foo()  //obj