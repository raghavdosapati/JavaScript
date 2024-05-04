//string methods in javascript like concat(),toLowerCase(),trim()....
// strings are immutable
var str="This gives us the most entertainment among all"
console.log(str.toLowerCase())
console.log("------trim----------")
let name = "    Anirudh"
console.log("removing all whitespaces "+name.trim())
console.log(name.toUpperCase())
console.log("-----charAt-----------")
console.log(name.charAt(0))
console.log(name.charAt(3))
console.log(name.charCodeAt(2))
console.log("-------concat---------")
let name1="haritha "
let name2="aishu"
console.log("one string concat with another string "+name1.concat(name2))
console.log("------indexOf----------")
console.log("index off particular character "+str.indexOf('s'))
console.log("index off particular character "+str.indexOf('e'))
console.log("index off particular character "+str.indexOf('z'))
console.log("-------slice---------")
console.log("slicing of string "+str.slice(2,11))
console.log("-------------------")
const n1=32
const n2=98
let a=n1.toString()
console.log(a+" "+typeof a)
console.log(typeof n1)
console.log(typeof n2)
console.log("----------------")
console.log(str.split(" "))
