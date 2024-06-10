// TRY CATCH
setTimeout(()=>{
    console.log("Value - A is running ---")
},1000)
console.log("Running outside--")
setTimeout(()=>{
    console.log("Value - B is running ---")
},2000)
try{
    console.log("Try is working")
    setTimeout(()=>{
       console.log(rahull)
    },1000)
}
catch(err){
    console.log(err)
}
setTimeout(()=>{
    console.log("Value - C is running ---")
},2000)
