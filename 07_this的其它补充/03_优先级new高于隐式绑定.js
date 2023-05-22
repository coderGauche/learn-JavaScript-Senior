var obj = {
    name: 'kobi',
    age: 29,
    foo: function () {
        console.log(this);
    }
}

//new优先级高于隐式绑定
var f = new obj.foo()

