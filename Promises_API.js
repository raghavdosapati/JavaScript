let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
                // console.log("Resolved after 2 seconds")
                resolve(56)
        }, 21000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
            // console.log("Resolved after 2 seconds")
            reject(new Error)
            // resolve("Value 2")
    }, 12000)
})
let p3= new Promise((resolve, reject) => {
    setTimeout(() => {
            // console.log("Resolved after 2 seconds")
            resolve("Value 3")
    }, 3000)
})
p1.then((value)=>{
    console.log(value)
})
p2.then((value)=>{
    console.log(value)
})
p3.then((value)=>{
    console.log(value)
})
    promise API

let promise_all=Promise.all([p1,p2,p3])         //this promise.all works if there is no error in those promises
promise_all.then((value)=>{
    console.log(value)
})

let promise_all=Promise.allSettled([p1,p2,p3])         //this promise.allsettled works if there is  error in those promises and consoles without error
promise_all.then((value)=>{
    console.log(value)
})
let promise_all=Promise.race([p1,p2,p3])         //this promise.race works which promises resolves/rejects in those promises 
promise_all.then((value)=>{
    console.log(value)
}
let promise_all=Promise.resolve(4)         //try out 
promise_all.then((value)=>{
    console.log(value)
})
let promise_all=Promise.any([p1,p2,p3]) 
promise_all.then((value)=>{                                                     //try it out
    console.log(value)
})
let promise_all=Promise.reject(new Error)         //try out 
promise_all.then((value)=>{
    console.log(value)
})
