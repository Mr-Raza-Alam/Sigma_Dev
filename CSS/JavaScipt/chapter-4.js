// object leterals
// let student = {
//   name : "Rhosan Kumar",
//   age : 23,
//   marks : 95.3
// };
// // in object the order of key-value pair display in random order
// console.log(student);

// const item = {
//    price : 100.76,
//    discount : 50,
//    colors : ["red","green"]
// }; 

// // Thread/Twitter Post

// const threadPost = {
//    username : "@RazaAlam",
//    content : "I am a Software Developer",
//    likes : 34,
//    reposts : 65,
//    tags : ["@dev","@apnacollege"]
// };

// console.log(threadPost);

// // nesting of object

// const classInfo = {
//   aman : {grade : 'A+',city : "Delhi"},
//   shardha : {grade : 'A',},
// };

// // generate  random number b/e 1 and 100
// let random = Math.floor(Math.random()*100)+1;
// console.log(`Random value b/w 1 - 100 : ${random}`);
// let random2 = Math.floor(Math.random()*5)+1;
// console.log(`Random value b/w 1 - 5 : ${random2}`);


// // Desgin a Guessing Game
// let maxNum = prompt("Enter a max number : ");
// // now generate a random number  of range 1 to maxNum given by user
// let ranNum = Math.floor(Math.random()*10)+1;
// console.log(`random number : ${ranNum}`);

// let  guess = prompt(`Guess a number btw 1 to ${maxNum} : `);

// // so,now start the game
//  while(true){
//    if(guess == "quit"){
//         alert("you quit the game.");
//         break;
//     }
//    else if(guess == ranNum){
//     alert(`Congrats! you guess a correct number i.e ${ranNum}`);
//     console.log(`Hurray! you guess a correct number i.e ${ranNum}`);
//     break;
//    }else if(guess < ranNum) {
//     guess = prompt("hint : your guess is too small .Pleas try again...");
//    }
//    else{
//     guess = prompt("hint : your guess is too large .Pleas try again...");
//    }
//}