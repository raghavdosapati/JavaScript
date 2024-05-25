let val=true
function getRandomCharacter() {
    const characters = ['S', 'G', 'W'];
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}
while(val){
    let person1=prompt("enter s,w,g :")
    let person2=getRandomCharacter()
    if(person1=='S' && person2=='G' || person1=='G' && person2=='S'){
        alert("G wins")
    }
    if(person1=='S' && person2=='W' || person1=='W' && person2=='S'){
        alert("S wins")
    }
    if(person1=='W' && person2=='G'|| person1=='G' && person2=='W'){
        alert("W wins")
    }
    let b=confirm("Do u want to play again:")
    val=b
}

