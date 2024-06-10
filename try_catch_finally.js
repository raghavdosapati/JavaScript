// try - catch - finally
console.log("Try block is executing--")
const func=()=>{
    try{
        let val=1
        let val2=0
        console.log(error)
        console.log("undefined --"+val/val2)
        return
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("This block always be executed--")
        let a=10
        let b=0
        console.log(a/b)
    }
}
func()
console.log("func function called--")
