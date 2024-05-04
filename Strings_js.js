/* 
The JavaScript string is an object that represents a sequence of characters.
There are 2 ways to create string in JavaScript
    By string literal
    By string object (using new keyword)
*/
// string literal 
var stringname="string value";  //one way
console.log(stringname)

var name=new String("raghav"); 
console.log(name) //another way
// new keyword is used to create instance of string.

let name = "Raghavendra"
console.log(name.length)
// console.log(name[5])
// for(let i in name){
//   console.log(name[i]+"\t")
// }
for(let i=0;i<name.length;i++){
  console.log(name[i])
}

//BACL-TICK
//TEMPLATE LITERALS
//Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions,
//use backtick {`} instead single and double quotes
let name1="raghav"
let name2="manoj"
const a=20 
const b=49
let sen=`${name1} is a friend of ${name2}`
console.log(sen)
console.log(`${name2} got ${b} marks and ${name1} got ${a} marks `)    // string interpolation

//ESCAPE SEQUENCE CHARACTERS
/*Escape Characters(Backslash) are the symbol used to begin an escape command in order to execute some operation. 
Escape characters are characters that are used when working with special characters like single quotes, and double quotes, To print these characters as it is, including the backslash ‘\’ in front of them.
*/
let str='bana\tna'    //bana\nna
console.log(str)
console.log(str.length)
for(let ind in str){
  console.log(str[ind])
}
