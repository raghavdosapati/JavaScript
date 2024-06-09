// when async is declared it will return promise
// if async would be there in a function .then() will have a value of promise
// async -- await
async function something(){
    let p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Value-1")
        },1000)
    })
    let p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Value-2")
        },5000)
    })
    // p1.then(alert)
    // p2.then(alert)
    let a = await p1
    console.log(a)
    let b = await p2
    console.log(b)
    return[p1,p2]
}
const someone=async ()=>{
    console.log("hey this is somenone function")
    let m=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Value-someone")
        },3000)
    })
    m.then((value)=>{
        console.log(value)
    })
}
console.log("Hey heere wee goo--")
const result=async()=>{
    let res=await something()
    let ans=await someone()
    
}
result()
