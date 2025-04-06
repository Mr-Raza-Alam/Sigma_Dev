// this keyword

// const student = {
//   name : "",
//   age : 0,
//   eng : 0,
//   math : 0,
//   phy : 0,
//   getAvg(){
//     // let avg = (eng+math+phy)/3;// this will display an error , i.e eng is not defined. b/c it cann't directly access the object's property i.e calling object . and resolve by using "this keyword".
//   let avg = (this.eng + this.math+this.phy)/3;
//     console.log(`${this.name} got average score : ${avg}`);
//   },
//   getInfo(){
//     console.log(this);
//     console.log(`Your information are : \nYour name : ${this.name}\nYour age : ${this.age}\nYour english mark : ${this.eng}\nYour maths mark : ${this.math}\nYour phy : ${this.phy}\nYour percentage : ${this.getAvg()}%\n`);//???
//   }
// };

// // insert information dynamically.
// let Name = prompt("Enter your name : ");
// let a = prompt("Enter your age : ");
// let e = prompt("Enter your english mark : ");
// let m = prompt("Enter your mathematic mark : ");
// let p = prompt("Enter your physics mark : ");
// a = parseInt(a);
// m = parseInt(m);
// e = parseInt(e);
// p = parseInt(p);
// student.name = Name;
// student.age = a;
// student.eng = e;
// student.math = m;
// student.phy = p;
// student.getInfo();

// function fun_This(){
//     console.log(this);// display a window object for the browser's window
// }

// function student(Name,a,e,m,p){// constructor function
//     this.name = Name;
//     this.age = a;
//     this.eng = e;
//     this.math = m;
//     this.phy = p;

// }

// try & catch statement.
// console.log("Hello");
// //console.log(a);// return an error.b/c a is undefined and it stop next statement to execute . therefor use try & catch 
// try{
//     console.log(a);
// }catch(e){
//   console.log("a variable doesn't exist.i.e\n error!\n"+e);
  
// }
// console.log("Ok fine");

// Miscellenious Topics
//  Arrow function
//  const sum = (a,b) =>{// here sum is a varialbe not function name but it still work like a function,so sum also act as fun.name for calling purpose.
//     return (a+b);
//  };
// console.log(sum(4,5));

// const cube = x=>{//or const cube (x)
//     return (x*x*x);
// }
// let n = prompt("Enter a number : ");
// n = parseInt(n);
// console.log(`Cube of ${n} = ${cube(n)}`);

// const pow = (a,b)=>{
//     return (a**b);// return a^b = ??.e.g 2^4 = 16
// }

// let b = prompt("Enter a base : ");
// b = parseInt(b);
// let p = prompt("Enter the power to base : ");
// p = parseInt(p);
// console.log(`${b}^${p} = ${pow(b,p)}`);

// // implicit return
// const mul = (p,q)=>(p*q);// return multiplication of p and q .e.g mul(5,4) return 20 valid one.

// setTimeout(fun,time) function
// console.log("SetTimeout(fumction,time)");

// // const sq = setTimeout((a=>(a*a),4000)); //find its solution
// setTimeout(()=>{console.log("ApnaCollege")},5000);// 50000ms = 5sec

// console.log("SetTimeout executed.");

// setInterval(fun,timeout) -- it execute the piece of code written in the callback fun, infinte time after a given interval
// let id =  setInterval(()=>{console.log(`Hello!Everyone,welcome to our Show.`)},2000);// now it execute infinite time after each 2sec of interval
// console.log("setInterval function time")
//  // to stop setInterval , we use clearInterval(id)
// clearInterval(id);
// console.log("setInterval function time has been end");

// this keyword with Arrow Function

const employee =  {
    emp_name : "Amam",
    emp_id : 54327,
    emp_salary : 67800,
    emp_city : "Patna",
    pro : this,// it is now global scope . therefore it has window object

    getInfo : function(){// normal fun.
        console.log(this);// this is an employee object then it return employee object
    //   console.log(`${this.emp_name} is an employee in Google with emp_id - ${emp_id} and live in ${this.emp_city} and his earning is $${this.emp_salary}`);
      return this.emp_salary;
    },
    getCity : ()=>{// arrow fun.
      console.log(this);// here this means parent's scope . i.e getCity() has window its parent .so , it display window object not its own
    //   console.log(`Emp_city : ${this.emp_city}.`);
      return this.emp_id;// return undefined 
    },
// to know about its benefits 
getInfo1: function(){
    setTimeout(()=>{console.log(this)},2000);// here this means employee scope
},
getInfo2: function(){
    setTimeout(function(){console.log(this)},3000);// here this means window scope
}
};

// employee.getInfo();
// employee.getCity();

// practice ques. 
// ques-1
// console.log("Question-1");
// const sq = (n) => n*n;// it will return square of n
// let x = prompt("Enter a number : ");
// x = parseInt(x);
// console.log(`Sqaure of ${x} : ${sq(x)}`);
// // ques-2 print hello world 5 times at interval of 2s each
// console.log("Question-2");
// let id2 =  setInterval(() =>{ 
//      console.log(`Hello World!`);   
//  },2000);
//  setTimeout(()=>{// it will activate after 10sec
//     clearInterval(id2);
//     console.log(`SetInterval function get stop at 10sec.`);
//  },10000);

// Assignment questions
// console.log("Ass-Question-1");
// let arr = [4,5,8,12,34,65];
// const arrAvg = (arr)=>{
//   let sum = 0;
//   for(let i of arr){
//     sum +=i;
//   }
//   return (sum/arr.length);
// };
// console.log(`Array is :\n${arr}`);
// console.log(`Average of array'elements : ${arrAvg(arr)}`);

//  console.log("Ass-Question-2");
//  const isEven = n => n%2==0;
//  let y = prompt("Enter a number : ");
//  y = parseInt(y);
//  console.log(`${y} is even or not??\n answer : ${isEven(y)}`);

// console.log("Ass-Question-3");
// const object1 = {
//     message : 'hello,world!',
//     longMessage(){
//         console.log(this.message);
//     }
// };

// setTimeout(object1.longMessage,1000);// return undefined

// console.log("Ass-Question-4");

// let len = 4;
// function callback(){
//     console.log(this.len);
// }
// const object = {
//    len : 5,
//    method(callback){
//     callback();
//    },
// };

// object.method(callback);// return undefined 