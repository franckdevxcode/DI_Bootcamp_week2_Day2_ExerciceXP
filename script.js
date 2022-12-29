/*1.Create 2 variables, x and y. Each of them should have a different numeric value.
2.Write an if/else statement that checks which number is bigger.*/

let x = Number(3);
let y = Number(5);
if (x>y){
    alert(x +" is the biggest number");
}else {
 alert(y + " is the biggest number");
}

/* 


if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
else, console.log ‘I dont care, I prefer cats’*/

//1.Create a variable called where it’s value is “Chihuahua”.newDog
let newDog = "Chihuahua";
// 2.Check and display how many letters are in .newDog
 console.log(newDog.length) ;

// 3.Display the variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).newDog
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
//4.
if(newDog==="Chihuahua"){
    console.log("I love Chihuahuas, it’s my favorite dog breed");
}else {
    console.log("I dont care, I prefer cats")
}

/* Exercice 3
Prompt the user for a number and save it to a variable.
Check whether the variable is even or odd.
If it is even, display: “x is an even number”. Where x is the actual number the user chose.
If it is odd, display: “x is an odd number”. Where x is the actual number the user chose
*/

// 1. Prompt the user for a number and save it to a variable.
  let usernumber =prompt("veuillez saisir un nombre");
//2
  if (Number(usernumber) % 2===0){
    console.log(usernumber + " is an even number");
  } else {
    console.log(usernumber + " x is an odd number");
  }

  // Exercice 4
  const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

  //1
  if (users.length===0){
    console.log("no one is online")
  }

  if (users.length===1){
    console.log( users[0] +" is online")
  }

  if (users.length===2){
    console.log( users[0] + " and" + users[1]+" are online")
  }

  if (users.length>2){
    console.log('${users[0]}, ${users[1]}  and ${users.length -2} more are online');
  }