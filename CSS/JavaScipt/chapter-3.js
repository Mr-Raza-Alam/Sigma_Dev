// print odd no. from i = 1 to i = 15;
// for(let i = 15; i>=1; i-=2){// i = 1 ; i<=15; i+=2;
//     console.log(`i = ${i}`);
// }

// multiplication table of 5
// let n = prompt("Enter your number : "); 
// // since n is string type return by prompt , then first convert it into integer
//    n = parseInt(n);
// console.log(`Table of ${n} is given below : `);
// for(let i = 1; i<=10; i++){
//   console.log(`${n} * ${i} = ${n*i}\n`);
// }

// let's play a game called Favorite Movie
// const movie = "Avengers";
// let u = prompt("Guess a hollywood movie : ");
// while((u != movie )){//&& (u != "quite") replace by break statement
//  if(u == "quite"){
//   alert("you quite");
//   break;
//  }
//   alert("Wrong guess.Try again");
//   u = prompt("Guess a hollywood movie : ");
//   }
//  if(u == movie){
//   console.log("Hurray! you won the game.Collect your reward from below.\nYou win 2 silver coins");
//  }else{
//   alert("You have Quite the game.");
//  }

// array's loop
// let fruits = ["mango","apple","grapes","papaya","lichi"];
//  fruits.push("apple");
//  fruits.unshift("pomegranate");
//  console.log("Name of fruits in the Menu-list : ");
//  for(fruite of fruits){
//   console.log(`fruite--${fruite}\n`);
//  }

 // Built Todo App
 let todo = [];// empty at initial time

//  console.log("Press-1: to add new todo\nPress-2: to delete a task\nPress-3: to check updated menu\nPress-4: to exit the todo game");
 // ch = parseInt(ch);

//   let ch;
//  while(1){// 1 or true
//   ch = prompt("Enter an option : ");
//   if(ch == "add"){
//     newTask = prompt("Enter new todo : ");
//     todo.push(newTask);
//   }else if(ch =="delete"){
//     deleteItem = prompt("Enter a deleting task : ");
//     let idx = todo.indexOf(deleteItem);
//     todo.splice(idx,1);// remove 1-item from given idx
//   }else if(ch =="list"){
//    console.log("Todo list\n");
//    console.log("--------------------");
//     for(t of todo){
//       console.log(`${t}\n`);
//      }  
//    console.log("--------------------");
//   }
//   else{
//     console.log("you quite the game.");
//     break;
//   }
 //}



// for(let i = 0; i<fruits.length; i++){
//   console.log(`fruite-${i+1} ---- ${fruits[i]}\n`);
// }

// Assignment Question-2 & 3

//  let number = prompt("Enter a number : ");
//  number = parseInt(number);
// let sum = 0;
// let count = 0;  
// copy = number;
// while(copy > 0){
//   digit = copy%10;
//   sum += digit;
//    copy = Math.floor(copy/10);
//   count++;
// }
// alert(`The sum of digits of ${number} = ${sum}`);
// alert(`Total no. of digits are in ${number} = ${count}`);

// question-1
// let num = prompt("Enter an element : ");
// num = parseInt(num);
// let arr = [1,2,3,5,4,2,3,2];
// console.log(arr);
// for(let i = 0; i<arr.length; i++){
//   if(arr[i] == num){
//     arr.splice(i,1);
//   }
// }
// console.log(arr);

// create options menu for selecting a country and it return corresponding capital
// let countryInfo = [["India","New Delhi"],["China","Bijing"],["Bhutan","Thimpu"],["Franch","Paris"],["Pakistan","Islamabad"],["USA","Washington"],["UK","London"],["Sri lanka","Colombo"],["Afganistan","Kabul"],["Nepal","Kathmandu"]];

// console.log("Country Name    Capital-code");
// for(let i= 0; i<countryInfo.length; i++){
//  if(i ==5 || i==6){
//   console.log(`      ${countryInfo[i][0]}           ${i+1}\n`);
//  }else{
//   console.log(`     ${countryInfo[i][0]}       ${i+1}\n`);
//  }
// }
// let code = prompt("Enter a capital code to get captial of requested country : ");
//  if(countryInfo[code-1][0]){
//   alert(`Capital of ${countryInfo[code-1][0]} : ${countryInfo[code-1][1]}`);
//   console.log(`Capital of ${countryInfo[code-1][0]} : ${countryInfo[code-1][1]}`);
//  }else{
//   alert("Do not exist requested country in the world");
// }
  


