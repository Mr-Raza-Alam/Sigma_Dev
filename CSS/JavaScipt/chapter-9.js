// For assignment question.
 let btn = document.createElement("button");
 let inp = document.createElement("input");
 let head2 = document.createElement("h2");
 let div = document.querySelector(".assign");
 // insert your created button into div
  div.append(btn);
  div.prepend(head2);
  div.append(inp);
  inp.placeholder = "username...";
  btn.innerHTML = 'Click Me!';
  btn.addEventListener("click",()=>{
     console.dir(btn);
    btn.style.backgroundColor = "green";
  })

//   inp.addEventListener("input",()=>{
//   });
  inp.addEventListener('keypress',(event)=>{
    // console.dir(event);
   if((event.keyCode>=65 && event.keyCode<=90) || (event.keyCode>= 97 && event.keyCode<122)){
    head2.innerHTML = `Given username : ${inp.value}`;
     }else if(event.keyCode == 32){
       head2.innerHTML = `Given username : ${inp.value}`;
    }else{
        alert("Character should be alphabetic and space only.");
          inp.value = '';
     }
  });

// For Activity
//  let btn = document.querySelector('#Cbtn');

//  btn.addEventListener("click",(e)=>{
//  let head2 = document.querySelector('h2');
//        let color = randomColorGen();
//     head2.innerText = color;
//     alert("Color has been updated.");
//  let res = document.querySelector('.result');

//     res.innerText = `This is a ${color} colour`;
//     res.style.backgroundColor = color;
//  });

//  function randomColorGen(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//      let color = `rgb(${red}, ${green}, ${blue})`;
//      return color;
//  }
// let btns = document.querySelectorAll('.box button');
// let btn2 = document.querySelector('.box #btn5');
// let dib = document.querySelector('.box');
// console.dir(btns);

// btn2.onclick = function(){
//     console.log("New button!.");
//     let num = prompt("Enter your number  : ");
//     num = parseInt(num);
//     if(num%5 == 0){
//         alert(`${num} is a multiple of 5.`);
//     }else{
//         alert(`${num} is not a multiple of 5.`);
//     }
// }
// or
// for(i of btns){
//     i.onclick = sayHello;
//     console.log(i.onmouseeneter);
//     // if(i.onmouserenter){
//     //     MouseHover();
//     // }
//     // i.onmouseenter = MouseHover;
//     i.onmouseout = MouseOut;
// } 
// btn2.addEventListener("click",sayHello);
// btns[0].addEventListener("click",MouseHover);
// btns[3].addEventListener("click",MouseOut);
// btns[2].addEventListener("click",()=>{
//     dib.classList.add('boxIn');
// });
// function sayHello(){
//     alert("Hi, this is say hello here.");

// }
// function MouseHover(){
//     btn2.style.backgroundColor = "brown";
//     dib.classList.add('boxBg');
// }
// function MouseOut(){
//     dib.classList.add('boxOut');
// }
// const btn = document.querySelector('button');
// const ipt = document.querySelector('input');
// let form = document.querySelector('form');
// // btn.addEventListener("click",(event)=>{
// //    console.log("Button is clicked.!");
// //    console.log(event);
// // });
// btn.addEventListener("dblclick",(event)=>{
//     console.log("Button is clicked.!");
//     console.log(event);
// });
// console.log("After keydown.");
// ipt.addEventListener("keydown",(event)=>{
//   if(event.code == 'ArrowUp'){
//    alert("Character move forward.");
//   }else if(event.code == 'ArrowDown'){
//    alert("Character move downward.");
//   }else if(event.code == 'ArrowLeft'){
//    alert("Character move left.");
//   }else if(event.code == 'ArrowRight'){
//    alert("Character move right.");
//   }else{
//    console.log(`code : ${event.code}`);// ArrowUp(U),ArrowDown(D),ArrowLeft(L),ArrowRight(R).
//   }
//    // console.log("Key was pressed.");
// });
// console.log("After keyup.");

// ipt.addEventListener("keyup",(event)=>{
//    console.log(`key : ${event.key}`);
//    console.log(`code : ${event.code}`);
//    // console.log("Key was released.");
// });
// console.log("After keypress.");
// ipt.addEventListener("keypress",(event)=>{
//    console.log(`key : ${event.key}`);
//    console.log(`code : ${event.code}`);
// //   console.log("Key was handle. ");
// });
// let p = document.querySelector('p');
// form.addEventListener("submit",(event)=>{
//    event.preventDefault();// it will prevent default error occurs by the program.
//     console.dir(form);
//     let user = form.elements[0];
//     let para = form.elements[1];
//     p.innerHTML = `Username : ${user.value}<br>Password : ${para.value}`;
// //   // access form's data from form
// //    let user = document.querySelector('#user');
// //    let pass = document.querySelector('#password');
// //    console.dir(user);
// //    // console.log(inp.innerText);// since innerText should return all text written value inside inp but actually it won't work ,So, we another properties and i.e value = 
// //    // console.log(user.value);
// //    let para = document.querySelector('p');
// //    // para.innerHTML = `<b>${user.value}</b>`;  ?? why it is not working b/c of next line
// //    para.innerHTML = `Your password : ${pass.value}`;
// //    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// //    // alert("Your form has been submitted. ");
// });