// function / method
// function hello(){// fun. definition
//     console.log("Hello Functions : ");
// }

// function print1to5(){
//     for(let i = 1; i<6; i++){
//         console.log(`i = ${i}\n`);
//     }
// }

// print1to5();// function call 

// // practice qus-1 - print a poem.

// function printPoem(){
//     let poem = prompt("Enter a poem : ");
//     console.log(`Your poem is pleasent to ear \n${poem}`);
// }

// call printPoem
//printPoem();

// CAF to roll a dice and always display the value of the dice(1 to 6).
// function diceRoll(){
//     let dice = Math.floor(Math.random()*6)+1;
//     let guess = prompt("Roll your dice : ");
//     if(dice == guess){
//        console.log(`Your number on dice : ${dice}`);
//     }else{
//      console.log(`Your number on dice : ${dice}`);
//     }
// }
// // call a fun.
// diceRoll();

// function with arguments
// function printInfo(name,age,salary){
//      console.log(`Name : ${name}\nAge : ${age}\nSalary : ${salary}`);
// }
// let n = prompt("Enter a name : ");
// let a = prompt("Enter an age : ");
// let s = prompt("Enter a salary : ");
// printInfo(n,a,s);
 
// practice Qs.-- create a func. that return avg of 3 numbers.
// function calAvg(a,b,c){
//     let avg = (a+b+c)/3;
//     alert(`Average of ${a},${b},${c} = ${avg}`);
//     console.log(`Average of ${a},${b},${c} = ${avg}`);
// }
// let y = prompt("Enter 1st no. : ");
// let x = prompt("Enter 2nd no.  : ");
// let z = prompt("Enter 3rd no. : ");
// x = parseInt(x);
// y = parseInt(y);
// z = parseInt(z);
// calAvg(x,z,y);

// multiplication table 
// function getTable(n){
//   console.log(`Table of ${n} is given below :`);
//   for(let i = 1; i<11; i++){
//     console.log(`${n} * ${i} = ${n*i}`);
//   }
// }
// let num = prompt("Enter a number : ");
// num = parseInt(num);
// getTable(num);

// return in function
// let arr = ["NCC","ARMY","DRILL","INTERVIEW","SUO","UO","CAMP","TRAINING"];

// function fun(arr){
//     return arr.slice(3,5);
// }
// let ans = fun(arr);
// console.log(ans);

// function isAdult(age){
//   if(age>=18){
//     return ("Adult one");
//   }else{
//     return ("Child one");

//   }
//   console.log("bye bye")// not executable line 
// }

// practice ques.-5 return sum of numbers from 1 to n
// function getSum(n){
//   let sum = 0;
//   for(let i = 1; i<=n; i++){
//     sum +=i;
//   }
//   return sum;
// }

// let num = prompt("Enter a number ");
// console.log(`Sum of numbers from ${1} to ${num} = ${getSum(num)}`);

// // practice-ques-6- return concatenation of all strings in an array
// let str = ["Java"," is ","good ","for ","app ","development"];
// console.log(str);
// function concateStr(str){
//  // let ans ; return undefine then add rest elements of str
//   let ans = "";
//   for(let i = 0; i<str.length; i++){
//     ans +=str[i];
//   }
//   return ans;
// }

// console.log(`After concatenation , we have a string :\n ${concateStr(str)}`);

// Scope - functional,block,lexical , and global
//  function outerFunc(){
//     let x = 5,y = 8;
//     function innerFun(){
//         console.log(`x : ${x}`);// is accessible by lexical scopt
//         console.log(`y = ${y}`)
//         let a = 9;
//     }
//     //console.log(a);// is inaccessible 
//     innerFun();
//  }
//  //innerFun();// not in functional scope, so can't accessible
//  // but, given fun. is accessible.
//  outerFunc() 

// // practices ques.7

// let greet = "Hello India"; // global scope variable

// function changeGreet(){
//     let greet = "namaste India"; // functional scope
//     console.log(greet);// will print namaste India.
//     function innerGreet(){
//         // lexical scope
//         console.log(greet);// also will print namaste India
//     }
//     innerGreet();
// }
// console.log(`Outer : ${greet}`);// will print Hello India.
// changeGreet();

// Higher Order Funciton

// let greet = function(){
//     console.log("High oder function");

// }

// function multipleGreet(func,n){// higher Order function -- work during APIs call
//     for(let i = 1; i<=n; i++){
//         func();// given in argument
//     }
// }

//    multipleGreet(greet,3);// not multipleGreet(greet(),3) return error b/c greet() direct call it .

// //Higher order function that return some function.
// function oddEvenTest(request){
//  if(request == "odd"){// this is a custom function.
//     // here it return whole function definition
//     return function(n){
//         console.log(!(n%2 == 0));
//     }
//  }else if(request == "even"){// this is a custom function.
//  // similarly here it return whole function definition
//     return function(n){
//         console.log(n%2 == 0);
//     }
//  }else{
//     console.log("Wrong request");
//  }  
// }
// let r = prompt("Enter your request for an odd/even function : ");
// let n = prompt("Enter a numer : ");
// n = parseInt(n);
// let fun = oddEvenTest(r);
// fun(n);
// // console.log(`On higher order function call : ${fun(n)} `);

// // method - it is defined inside an object.

// const calculator = {
//      num : 55,
//      add : function(a, b){// METHOD-1
//         return (a+b);
//      },
//     sub : function(x,y){// METHOD-2
//         return(x-y);
//     },
//     product : function(p,q){// METHOD-3
//         return(p*q);
//     }
// };

// console.log(calculator.num);
// console.log(calculator.add(5,4));
// console.log(calculator.sub(5,4));
// console.log(calculator.product(5,4));

// Assigment question. with ques.1 - ques.-5

// ques.1 return an array of size larger than a given number
// function getMax(n,arr){
//     let max  = 0;
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i] > n){
//       max = arr[i];
//     }
//   }
//   if(max > 0){
//     return max;
//   }else{
//     console.log(`Array's elements are smaller than given number i.e ${n}.`);
//     return -1;
//   }
//  }
// let arr = [4,3,2,7,8,9,12,34];
// console.log(arr);
// let N = prompt("Enter a number : ");
// let ans = getMax(N,arr)
// if(ans>0){
//   console.log(`Larger array's element than given number ${N} is : ${ans}`);
// }
 // quest.-2
   let str = "abcdabcdefgggh";
   console.log(str);
  function uniqueString(str)   {
    let ans = "";
    for(let i = 0; i<str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
        // if currChar is not added yet then add it to ans.otherwise it is duplicate.
            ans += currChar;
        } 
    }
    alert(ans);
    return ans;
  }
  console.log(`Unique string : ${uniqueString(str)}`);

   
   // ques.-3 return longest length of country's name from a given list of the countries.
//  function longestName(country){
//       let maxLen = 0,idx;
//     for(let i = 0; i<country.length; i++){
//       len = country[i].length;
//       if(len > maxLen){
//         maxLen = len;
//         idx = i;
//       }
//     }
//    if(maxLen>0){
//      return country[idx];
//    } else{
//      console.log("Empty list!.");
//      return -1;
//    }
//  }

//  let country = ["Australia","Germany","India","United States of America","Japan"];
// console.log(`list of country are : \n ${country}`) ;
// console.log(`Longest country Name is :\n${longestName(country)}`);

// ques.4 - return no. of vowels in a String argument

// ques.-5 - function that generate a random no. within a range (start,end);
// let start = prompt("Enter a start-point of the range : ");
// let end = prompt("Enter a end-point of the range : ");
// start = parseInt(start);
// end = parseInt(end);

// function generateNum(s,e){
//     let diff = e - s;
//     return (Math.floor(Math.random()*diff) + s);
// }
// let ranNum = generateNum(start,end);
// alert(`A number generated by the system b/w ${start} - ${end} : ${ranNum}`);
// console.log(`A number generated by the system b/w ${start} - ${end} : ${ranNum}`);


