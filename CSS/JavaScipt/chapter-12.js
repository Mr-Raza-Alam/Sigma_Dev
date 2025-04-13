/// Async fucnction
// 

// Async Arrow function..
// let hello = async (data)=>{
//   console.log("Welcome to arrow async function.");
//    if(data.length >8){
//     return "You are best";
//    }else{
//     throw "you try best";
//    }
// }
// let str = prompt('Enter your data : ');
// hello(str)
// .then((res)=>{
//     alert(`promise has been successfully resolved and its res : \n${res}`);
// })
// .catch((err)=>{
//     alert(`promise has been rejected and its res : \n${err}`);
// });

// Await--> comes under await-- it pauses the execution of surrounding Async fuc. until the promise is settled.
// return any randome number

// let getNum = (n)=>{
//  return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()*n)+1;// return a random no. b/w 1--->n
//         console.log(`Random number : ${num}`);
//         resolve();// programm is successfully working then it means promise has been resolved
//       },1000);
//  }); 
// }


// async function demo(k) {
// //   getNum(k);// all these 3 return a random number at a time of 1sec. not in an 1sec interval
// //   getNum(k);// therefore we use Await preceding the function call
// //   getNum(k);
// await getNum(k);// return after 1sec.
// await getNum(k);// return after 2sec.
// await getNum(k);// return after 3sec.
// await getNum(k);// return after 4sec.
// await getNum(k);// return after 5sec. gap of 1sec b/w pre to now call

// }
// let a =  prompt("Enter a range b/w 1 to ... : ");
// a = parseInt(a);// use to convert/ cast from string to integer
// demo(a);

// Using Async and Await concept apply color insertion process on text written over page.
// let h2 = document.querySelector('h2');

// let generateColor = (color,delay)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let n = Math.floor(Math.random()*8)+1;/// random no. b/w 1 to 8
//         //  let red = Math.floor(Math.random()*255);
//         //  let green = Math.floor(Math.random()*255);
//         //  let blue = Math.floor(Math.random()*255);
//         //  console.log(`red : ${red}\ngreen : ${green}\nblue : ${blue}`);
//         if(n>5){
//             reject('promise denied');
//         }
//           h2.style.color = color;
//           resolve(`${color} color has been pasted on the text`);
//         },delay);
//     });
// }

// async function pasteColor(){
//   try{
//     await generateColor('red',1000);
//      await generateColor('blue',1000);
//      await generateColor('orange',1000);
//      await generateColor('brown',1000);
//      await generateColor('purple',1000);
//      await generateColor('green',1000);

//      let num = 5;
//      console.log(num*6);
//   }catch(err){
//     console.log(err);
//   }


//  }
// //  let col = prompt("Enter your desire color : ");

// pasteColor()
// .then((res)=>{
//   console.log(`promised was resolved.\n${res}`);
// })
// .catch(()=>{
// console.log('Promise was rejected.');
// });

// API---CONCEPT 
// let jsonResponse = '{"fact": "A cat can jump 5 times as high as it is tall.","length": 45}';
// // this json response come within a string format
// console.log(jsonResponse);
// // 
// // console.log(jsonResponse.fact);// return undefined b/c jsonResponse is still in string format so, first convert it into object using JSON.parse(jsonRes) then print it
// let validRes = JSON.parse(jsonResponse);// it return an object
// console.log(validRes.fact);

// Opposite concept js's object ----> json format 
// let university = {
//   school : "TSSOT",
//   ndepart : 5,
//   depart : ['cse','ece','age','ash','me'],
//   lab : ['cse-lab','robotic-lab','ece-lab'],
//   student : 450
// }
// console.log(university);// Acutal js object
// let jsonRes = JSON.stringify(university);// valid json data formate
// console.log(jsonRes);// this JSON - object 


// Our First Request

// let url = "https://catfact.ninja/fact";
// fetch(url)// it also return a Promise i.e an object
// .then((response)=>{
//    console.log(response);// here we can't see the actual response send by the url/api So, use .json()===> it will also return an object and also help to display the response.
//   //  response.json()// also return an another object in which api's actual response is avialable
//   //  .then((data)=>{
//   //    console.log(data);// data is an object here
//   //  });// 2nd way it is also a compact method
//   return response.json();
// })
// .then((data)=>{
//   console.log(`data-1 : ${data.fact}`);
//   return fetch(url);

// })
// .then((res)=>{
//   console.log(`response-2 : \n${res}`);
//  return response.json();
// })
// .then((data2)=>{
//   console.log(`data-2 : ${data2}`);
// })
// .catch((err)=>{
//  console.log(err);
// });

// // 
// console.log('i am happy');

// async function getFacts() {
//  try{
//     let res = await fetch(url) ;
//   console.log(`response- : \n${res}`);
//    let data = await res.json();
//    console.log(`data-1 : ${data}`);

//    let res2 = await fetch(url);
//    let data2 = await res2.json();
//    console.log(`data-2 : ${data2}`);
//  }catch(e){
//   console.log(`error : ${e}`);
//  }
// }

// getFacts(url);

// console.log('i am happy');
// 
//  let url = "https://catfact.ninja/fact";
// let fbtn = document.querySelector('button');

// fbtn.addEventListener('click', async()=>{
//     let para = document.querySelector('#fResult');
//     let text  = await getFact();
//      para.innerHTML = `<b>${text.fact}</b>`;
// });

// async function getFact(){
//   try{
//     let res = await fetch(url);
//     let data = await res.json();
//     // console.log(data.length);
//     return data;
//   }catch(e){
//     console.log(`error : ${e}`);
//     return "404--No fact found";
//   }
//}

//  let btn = document.querySelector("#imgBtn");

//  btn.addEventListener("click",async()=>{
//  let show = document.querySelector("#image");
//  let source = document.querySelector('a');
//  let res = await getImage();
//  let link = res.data.message;
//  source.setAttribute("href",link);
// //  console.log(link);//message
//  show.setAttribute("src",link);
//  });
//  let url2 = "https://dog.ceo/api/breeds/image/random";
// async function getImage(){
//   try{
//    let promise = await axios.get(url2);
//   //  console.log(promise.data.message);//message
//    return promise;
//   }catch(e){
//     console.log(`error : ${e}`);
//     return "404!\nImage not found";
//   }
// }

// i am coming back
//  let btn = document.querySelector("#imgBtn");

//  btn.addEventListener("click",()=>{
//  let show = document.querySelector("img");
// //  show.getAttribute('src',url2);
//  });
//  let url2 = "https://dog.ceo/api/breeds/image/random";
// async function getImage(){
//   try{
//    let promise = await fetch(url2);
//    let link = promise.json();
//    console.log(link);//message
//   }catch(e){
//     console.log(`error : ${e}`);
//     return "404!\nImage not found";
//   }
// }

// Sending header alongwith axios in the request
// let btn = document.querySelector('#Jbtn');
// btn.addEventListener('click',async()=>{
// let diba = document.querySelector('div'); 
//   let res = await getJokes();
//   // console.log(res.data);
//   diba.innerHTML = `<b>${res.data.joke}</b>`;

// });
// let url3 = "https://icanhazdadjoke.com/";
// async function getJokes(){
//   try {
//     const config = {headers : {Accept : "application/json"}};
//     // let joke = await axios.get(url3);
//     let joke = await axios.get(url3,config);// send header as 2nd argument to send response in json formate rather than html formate
//     // console.log(joke.data);// this return in html format but if we required it in json format then , have to use headers explicitly
//     return joke;
//   } catch (error) {
//     console.log(`error : ${error}`);
//     return "403!\nJoke not found";
//   }
// }