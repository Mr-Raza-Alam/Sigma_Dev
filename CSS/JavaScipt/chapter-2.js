// string methods . strings are immutable i.e string get change on any change effect
// a) .trim() method -> it create a new string by removing whitespaces from both the ends of string
// let password = prompt("Enter your password : ");
// console.log(password.trim());
// console.log(password);

// b) .toLowerCase() & .toUpperCase()

// c) .indexOf(str)-- return 1st occurance index of str

// d) method chaining -->
//    let msg = "    IloveCoding     ";
// //    let newMsg = msg.trim();
//    console.log(newMsg);
//     console.log(newMsg.toUpperCase());
//     let newMsg = msg.trim().toUpperCase(); // -- method chaining

 //e) .slice(si,ei), .slice(si)  .slice(-a) i.e .slice(str.length - a as si)

 // f) . replace(old item of str, new item of user);
   // g) .repeat(t) -- return t times given string

   // q2
    //  let fullName =  'ApnaCollege';// ...4....9
    //     fullName.slice(4,9); // Colle
    //     fullName.replace("Apna","Our");// return OurCollege
    //     fullName.indexOf("na"); // return 2

    //  let part = fullName.slice(4);// return College
    //  part.replace("l","t"); // return Cotlege
     // or 
    //  let part2 = fullName.slice(4).replace('l','t').replace('l','t');//  return Cottege

     // A data structure called an Array
    //  let std = ["Java","C++","JavaScript"];

     // arrays are mutable 
    //  std[5] = "php";
     // now std become of length = 6;

     // arrays method ---> push(newStr)--> add a new element at last in the exiting array,pop() -- return last element of the array
     // Unshift --> also a newStr is append from starting using Unshift(newStr) and delete from starting ,use shift()
    //  let start = ['january','february','july','march','august']
    //  console.log(start);
    //  let final = start.shift();
    //   final = start.shift();
    //   final.Unshift
    //  console.log(final);


    let colors = ["red","orange","yellow","green","blue","indigo","violet"];
    let cars = ["toyta","baleno","BMW","Merchadise","wagnor","suzuki","ambessdor"];
    // includes method
    // console.log(cars.includes("axis"));
    // console.log(cars.includes("BMW"));
  //  // indexof method
  //   console.log(colors.indexOf("green"));
  //   console.log(colors.indexOf("blue"));

  // concatenate method
  // let newConcate = colors.concat(cars);
  // console.log(newConcate);
  // console.log(cars.concat(colors));

  // reverse method
  // console.log(colors.reverse());

  // slice method

  // console.log(colors.slice());
  // console.log(colors.slice(3));
  // console.log(colors.slice(3,6));
  // console.log(colors.slice(-3));

  // splice methode -- it is all in one 
  // console.log(colors.splice(4));// it return deleted portion from idx = 4 to end
  // console.log(colors)
  // console.log(colors.splice(0,1));// it return deleted portion of idx = 0 
  // console.log(colors)
  // console.log(colors.splice(1,1,"pink","skyblue")); // it return deleted portion only
  // console.log(colors)

// sort method 
// cars.sort();
// console.log(cars); 
// practice qs
// Q-1
//  let start = ['january','july','march','august']; 
//  let final = start.splice(0,1);
//  console.log(final); or
//  start.splice(0,2,'july','june');
//  console.log(start);

 // q-2 return index of javascript, if it was reversed
//  let proLang = ['c','c++','html','javascript','python','java','c#','sql'];
  // proLang.reverse();
  // console.log(proLang.indexOf("javascript"));
  // or proLang.reverse().indexof("javascript");

// reference variable 
// let arr = ['a','b','c'];
// let arrCopy = arr;
// console.log("array : \n",arr);
// arrCopy.push('d');
// arr.shift();
// console.log("arrayCopy : \n",arrCopy);
// console.log("array : \n",arr);
// arr.push('e');
// console.log("array : \n",arr);
// console.log("arrayCopy : \n",arrCopy);

// nesting of array
// let nest = [['x',null,'o'],[null,'x',null],['o',null,'x']];
// console.log(nest);

// nest[0].splice(1,1,'o');
// console.log(nest);

// Assignment qusti.
//Qs-4
let char = 'traIling';
 let idx = char.indexOf('I');
 
