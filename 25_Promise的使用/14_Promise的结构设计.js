/*
 * @Author: Gauche楽
 * @Date: 2023-06-14 03:20:52
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-15 00:09:18
 * @FilePath: /learn-JavaScript-Senior/25_Promise的使用/14_Promise的结构设计.js
 */

// const promise = new Promise((resolve, reject) => {
//     resolve('xxxx')
// })

// promise.then((data) => {
//     console.log(data);
// })

class ZFPromise {
    constructor(executor) {
        // 初始化状态为pending 记录状态
        this.state = 'pending';
        // 初始化成功的值为undefined
        this.value = undefined;
        // 初始化成功处理函数队列
        this.onFulfilledCallbacks = undefined;
        // 初始化失败处理函数队列
        this.onRejectedCallbacks = undefined;
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                queueMicrotask(() => {
                    this.value = value
                })
            }

        }
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                queueMicrotask(() => {
                    this.value = reason
                })
            }

        }
        executor(resolve, reject)
    }
}

const promise = new ZFPromise((resolve, reject) => {
    resolve('xxxx')
})


