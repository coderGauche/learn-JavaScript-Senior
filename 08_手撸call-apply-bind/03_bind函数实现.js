
Function.prototype.ZFBind = function (thisArg, ...argArray) {
    var fn = this
    thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window
    return function (...arr) {
        thisArg.fn = fn
        var result = thisArg.fn(...arr, ...argArray)
        delete thisArg.fn
        return result
    }
}


function foo(num1, num2, num3) {
    console.log(this, num1 + num2 + num3);
}


var p1 = foo.bind('aaaa', 10)
p1(20, 30)

var p2 = foo.ZFBind('aaaa', 10, 20, 30)
p2()