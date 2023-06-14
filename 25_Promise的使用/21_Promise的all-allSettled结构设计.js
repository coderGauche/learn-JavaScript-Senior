/*
 * @Author: Gauche楽
 * @Date: 2023-06-14 03:20:52
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-15 02:31:48
 * @FilePath: /learn-JavaScript-Senior/25_Promise的使用/21_Promise的all-allSettled结构设计.js
 */

// const promise = new Promise((resolve, reject) => {
//     resolve('xxxx')
// })

// promise.then((data) => {
//     console.log(data);
// })

const STATE_FULFILLED = 'fulfilled';
const STATE_REJECTED = 'rejected'
const STATE_PENDING = 'pending';


function execFunctionWithCatchError(execFn, value, resolve, reject) {
    try {
        const result = execFn(value)
        resolve(result)
    } catch (error) {
        reject(error)
    }
}

class ZFPromise {
    constructor(executor) {
        // 初始化状态为pending 记录状态
        this.state = STATE_PENDING;
        // 初始化成功的值为undefined
        this.value = undefined;
        // 初始化失败的原因为undefined
        this.reason = undefined;
        // 初始化成功处理函数队列
        this.onFulfilledCallbacks = [];
        // 初始化失败处理函数队列
        this.onRejectedCallbacks = [];
        const resolve = (value) => {
            if (this.state === STATE_PENDING) {
                // 添加微任务
                queueMicrotask(() => {
                    if (this.state !== STATE_PENDING) return
                    this.state = STATE_FULFILLED;
                    this.value = value;
                    this.onFulfilledCallbacks.forEach(callback => callback());
                });
            }
        };
        const reject = (reason) => {
            if (this.state === STATE_PENDING) {
                // 添加微任务
                queueMicrotask(() => {
                    if (this.state !== STATE_PENDING) return
                    this.state = STATE_REJECTED;
                    this.reason = reason;
                    this.onRejectedCallbacks.forEach(callback => callback());
                });
            }
        };
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error)
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = onFulfilled || (value => value)
        onRejected = onRejected || (err => { throw err })
        return new ZFPromise((resolve, reject) => {
            //处理如果多次调用then的时候，无法回调。处于fulfilled或者rejected在次调用zhen调一下
            //如果在then调用的时候，状态已经确定下来 次调用zhen调一下。
            if (this.state === STATE_FULFILLED && onFulfilled) {
                execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
            } else if (this.state === STATE_REJECTED && onRejected) {
                execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
            }
            // 如果状态处于pending的时候把成功和失败回调加进数组
            if (this.state === STATE_PENDING) {
                if (onFulfilled) this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
                    })
                });
                if (onRejected) this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
                    });

                });
            }

        })
    }
    catch(onRejected) {
        return this.then(undefined, onRejected)
    }
    finally(onFinally) {
        return this.then(() => {
            onFinally()
        }, () => {
            onFinally()
        })
    }
    static resolve(value) {
        if (value instanceof ZFPromise) {
            return value;
        }
        return new ZFPromise((resolve, reject) => {
            resolve(value)
        })
    }
    //static  类方法（静态方法）
    static reject(value) {
        if (value instanceof ZFPromise) {
            return value;
        }
        return new ZFPromise((resolve, reject) => {
            reject(value)
        })
    }
    static all(promises) {
        return new ZFPromise((resolve, reject) => {
            const result = [];
            promises.forEach(promise => {
                promise.then((data) => {
                    result.push(data)
                    if (result.length === promises.length) {
                        resolve(result);
                    }
                }, err => {
                    reject(err)
                })
            })
        })
    }
    static allSettled(promises) {
        return new ZFPromise((resolve, reject) => {
            const result = [];
            promises.forEach(promise => {
                promise.then((data) => {
                    result.push({ status: 'fulfilled', data })
                    if (result.length === promises.length) {
                        resolve(result);
                    }
                }, err => {
                    result.push({ status: 'rejected', err })
                    if (result.length === promises.length) {
                        resolve(result);
                    }
                })
            })
        })
    }
}

const p1 = new ZFPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1");
    }, 2000)
});

const p2 = new ZFPromise((resolve, reject) => {
    setTimeout(() => {
        reject("p2");
    }, 1000)
});

const p3 = new ZFPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3");
    }, 3000)
});


// ZFPromise.all([p1, p2, p3]).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log('err', err);
// })
ZFPromise.allSettled([p1, p2, p3]).then(res => {
    console.log(res);
}).catch(err => {
    console.log('err', err);
})

