//conditional statements
const prompt = require('prompt-sync')();    //if prompt is not defined in your editor,run this at the top 

let a=prompt("hey.. its a prompt message");
a=Number.parseInt(a);        //converting string to Number (typecasting)
if(a < 18 && a>9){
  console.log(" not eligible for driving licence");
}
else if(a<9){
  console.log("you are a kid ");
}
else {
  console.log("eligible for driving licence");
}

//Expressions  (switch)
const exp="sunday";
switch(exp){
  case 'monday':
    console.log("hey its mondayy")
    break;
  case 'tuesday':    //if break statement is not occurred for each cases then the next case will be executed.if exp=tuesday it will display "its nothing to do with wednesday"..so put break under tuesday
  case 'wednesday':
    console.log("its nothing to do with wednesday")
    break;
  case 'sunday':
    console.log("Sunday Funday")
    break;
  default:
     console.log("its default day as every day.")
     break;
}
