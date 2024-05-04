/* QUES-1
  Adding numbers to the array until we hit zero(0)
  */
let arr=[1,3,4,7,6,4,4,6]
let num
while(num!=0){
    num=parseInt(prompt('enter num :'))
    if(num==0)  break
    arr.push(num);
}
console.log('we hit zero')
console.log(arr)


/*   QUE-2
  filter for given numbers divisible by 10 in an array*/
// filter method which filters the array and returns new array
let arr=[2,20,6,70,60,28,80]
let arr2=arr.filter((x)=>{
    return x%10==0;
})
console.log(arr2)


/*
  QUE-3
  Return the array with the square of its each element*/
let arr=[1,2,3,4,5,6]
let arr2=arr.map((x)=>{
    return x*x;
})
console.log(arr2)


/*  QUE-4 
Use reduce method to calculate factorial of given numbers of first n natural numbers
*/
let arr=[1,2,3,4,5]
let arr2=arr.reduce((x1,x2)=>{
    return x1*x2;
})
console.log(arr2)


/*  QUES-5
  take a random number and take a number input from user and check whether if it matches the random number and count how many moves does it take to get matched.
  Return the score as 100 - moves count is the actual score.
  */
function getrandom(min, max) {
    return Math.floor(Math.random() * (max - min ) + min);
}

let n = getrandom(1, 100);
console.log(n)
let i = parseInt(prompt('Enter a number: '));
let count = 0; // Count starts from 1 since user has already made one attempt

while (i !== n) {
    if (i > n) {
        i--;
        count++;
    } else {
        i++;
        count++;
    }
}

let res = 100 - count;
console.log(res);

