alert("Enter a number:")  //alerts at the browser
let a =prompt("Enter a:")  //prompts takes user input
a=Number.parseInt(a)
document.write(a)
let b=confirm("You confirm changes")  //confirm is like boolean value.it confirms to do action or not
if(b){
    document.write(b)
}
else{
    document.write("you are not allowed")
}
