//Ques-1
// create a variable of type string and try to addd a number to it
let a="raghav"
let b=54
console.log(a+b)	//tryit

//Ques-2 use typeof operator for the variable string that we have used earlier
console.log(typeof (a+b))  

//Ques-3 create a const object and try to change the value later
const obj={
	name:"Anirudh",
	"age":54
}
console.log(obj)
//obj=87	//you cannot change try yourself
obj['name']="raghav"	//you can change keys and values but not the const obj
console.log(obj)

//Que-4		write a js program to create a word meaning dictionary with some words
const dic ={
	aptitude : "always be good in aptitude",
	appreciate : "appreciation is good ",
	batting : "dhoni was a wonderful ek batter"
}
console.log(dic['batting'])
