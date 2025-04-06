// Advance Array's-Methods :- forEach(fun. or fun.'s name)
// // forEach(fun,fun.'s name).
// let arr = [2,34,"aman","MS-Dhoni",43.123];
// let brr = [{name : "Sony Mahiwal",win: 10},{name : "Gita Singh Poghat",win: 1},{name : "Rohit Sharma",win : 3}];

let print = function(el){
    console.log(el);
}
// to access elements of array arr 
// way-1 simple using for of loop
// console.log("Access array's elements using for of loop");
// for(let i of arr ){
//     console.log(i);
// }
// console.log("Access array's elements using forEach method with normal fun. as agr.");
// arr.forEach(print);// using normal function as agrument 

// console.log("Access array's elements using forEach method with arrow fun. as call back fun. as arg.");
// arr.forEach((el)=>{
//   console.log(el);
// });// using normal function as agrument 

// access the array's object using forEach(arrow fun);
//  brr.forEach((obj)=>{
//     console.log(`Player Name : ${obj.name}`);
//     console.log(`Winnig Game : ${obj.win}`)
//  })

// Map method -- it is also similar as forEach(fun or fun.'s name) but it return a newArray with some Modification or direct duplicate of the original array
// let crr = [4.3,4.5,1.2,6.8];
// let double = crr.map((el)=>{
//    return Math.round((el*3 - 0.6));
// });

// console.log(double);

// Every-method--,it is like as AND logic gate it return true ,if all elements of given hold true otherwise return false

// let item = ["Apple","Onion","Patato","Orange","Banana","Mango","Raddish"];
// let ans = item.every((el) =>{
//   return (el == "Apple"||el == "Orange"||el == "Banana"||el == "Mango");
// });// it return false
// console.log(ans);
// // some- method -- it is like OR logic it return true ,if some of eles 
// let res = item.some((el) =>{
//     return (el == "Apple" || el == "Orange" || el == "Banana" || el == "Mango");
//   });// it return false. have doubts ?? doubts clear reason return missing of keyword now it return true
//   console.log(res);

// // Reduce -- return a single value by reducing the array as per given logic for reducing

// let num = [4,5,2,1,9];
// let finalValue = num.reduce((res,ele)=>{
//    console.log(`res : ${res}`);// it display value of res after final comutation of (res+ele).so we are able to display res value before its computation statement
//    return (res+ele);// it return sum of all elements of num array
// });

// console.log(`Final value ,after reduction of num : ${finalValue}`);``

// practice question on Reduce-Method - that return maximum in the array
//  let nums = [4,21,24,56,3,1,9,76,87,5];
//  let max = nums.reduce((ans,ele)=>{
//      if(ans<ele){ // if(ans>ele) return min
//         return ele;
//      }else {
//         return ans;
//      }
//  });
//  console.log(`Maximum in nums : ${max}`);

// practice question-1 return true,if all ele of array is multiple of 10 otherwise return false.
// let arr = [30,20,10,60,230,50];
// console.log(arr);
// let ans = arr.every((ele)=>{
//    return ele % 10 == 0;
// });
// console.log(`Is arr has all multiple of 10 elements??\nAns : ${ans}`);

// Default Parameters - it requires,when
//   function quotient(a,b = 4){
//     return a/b;
//   }

// console.log(`$Quoitent : ${quotient(15)}`);
// console.log(`$Quoitent : ${quotient(15,6)}`);
// function sub(a=4,b){
//     return a-b;
//   }
// console.log(`$Quoitent : ${sub(15)}`); // return NAN

// Spread-Method(...Iterable's Name)- it separate  elem of iterables indiviually
// let dock = [3,2,1,-6,-9,4,2.3,1.2,-83];
// console.log(`Minimum in dock : ${Math.min(...dock)}`);
// console.log(..."newConsole.log");

// Spread with object literals
//  const data = {
//     email : "ironman@gmail.com",
//     password : "abcd"
//  };
// // console.log(`data : ${data}`);
// console.log(data);
//  // internally
//  const dataCopy = {...data,id : 123};
//  console.log(dataCopy);

// Rest-(apposite concept of Spread)-- it aggrigate all agruments into a unit(called an array).

// function sumOfSqr(...args){// here args-- arguments
//     return args.reduce((sum,ele)=>{
//         console.log(`Squre of ${ele} : ${sum}`);
//         return (sum + ele*ele); have doubts
//     });
// }

// function sum(){
//     console.log(arguments);// 
//     // arguments.push(6);// show error b/c arguments is not an array ,it is a collection and we cannot 
//   for(let i = 0; i<arguments.length; i++){// workable like array , but Method of Array are not applicable for arguments
//     console.log(`${i} : ${arguments[i]}`);
//   }
// }
// sum(5,3,2);

// make a your own min&max-Method/function without using Math-library
// function min(...agrs){
//   return agrs.reduce((min,ele)=>{
//     if(min>ele){
//         return ele;
//     }else{
//         return min;
//     }
//   });
// } 

// destructing-- means storing values of arrays or object into multiple variables.
let names = ["tony","stark","bruecly","steve","peter"];
// let var1 = names[0];
// let var2 = names[1];
// let var3 = names[2];
// for assigning elemnets of names into diff. variable by initailizing separately each of one,JS has a wonderful technique and i.e destructing,given below
// let [avName1,avName2,...wrestler] = names; // just in a single line statement even in better way than previous
// console.log(avName1);// avName1 is variable which contain names[0].
// console.log(avName2);// avName2 is variable which contain names[1].
// console.log(wrestler);// wrestler is an array having ele.from bruecly

// destructing with object 
const student = {
   name : "karan",
   age : 15,
   class : 9,
   subjects : ["hindi","english","mathematics","science","sst"],
   username : "karan@12gmail.com",
   password : "abcd",
   city : "Pune"
};

// let user = student.username;
// let pass = student.password;
// but it can be done in a better way and i.e destructing concept

// let {username : user,password : pass , city : place = "Mumbai"
// , subjects : sub} = student;

// console.log(`username : ${user}`);
// console.log(`password : ${pass}`);
// console.log(`location : ${place}`);
// console.log(`Subjects of 9th standard is\n${sub}`);

// Assignment-1 - find sum of sqr of array using Arrow function and then find average of the array.

//   let array = [4,3,2,9,7];
//   const sum = (arr)=>{
//       return arr.reduce((sq,ele)=>{
//          return sq+(ele*ele);
//       });
//   }
//   console.log(`sum of squre : ${sum(array)}`);
 
// Assignment-2 -- return a new array,using map-Method whose each ele = ele of original array + 5.

// let numb = [6,5,3,2,3,9];
// console.log(`numb : ${numb}`);
// let newNumb = numb.map((ele)=>{
//      return ele+5;
// });

// console.log(`NewNumb : ${newNumb}`);

// Assignment-3 -- create a newArray whose ele are in uppercase of words present in the original array
// let words = ["shradha didi","aman bhaiya","saransh sir","nk gupta sir","prateek sir"];
// console.log(words);
// let newWords = words.map((ele)=>{
//     return ele.toUpperCase();
// });
// console.log(newWords);

// Assignment-4 -- return a newArray that has ele of original array in double order form alongwith additional ele.
let arr = [4,2,1,6,7,5];
const double = (arr,...args)=>[// Arrow function + Rest concept is applied
   ...arr,args.map((ele)=> ele*2),
];
console.log(double(arr,4,3,2));

// Assignment-5 -- 

// const obj1 = {item1 : "SWE",
//     item2 : "HWE",
//     item3 : "coding",
//     item4 : "rolling"
// };

// const obj2 = {set1 : "set of albums",
//     set2 : "set of fresh fruits",
//     set3 : "set of software products"
// };

// const obj = (obj1,obj2)=>({// Arrow function + Rest
//     ...obj1,...obj2
// });

// console.log(obj(obj1,obj2));
