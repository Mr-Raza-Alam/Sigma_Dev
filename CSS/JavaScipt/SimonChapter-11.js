let bd = document.querySelector('body');
let boxes = document.querySelectorAll('.gameBox');
let h3 = document.querySelector('h3');
let h2 =  document.querySelector('h2');

let gameSeq = [];
let userSeq = [];
let started = false;// game is not started
let level = 0;
let highScore = 0;
let btns = ['pink','green','orange','blue'];

document.addEventListener('keypress',()=>{
    if(started == false){
        console.log('a key has been pressed!');
        started = true;
        levelUp();
   
    }else{
        alert('The game has been started, start playing! your current scor = 1.');
    }
});
//  console.log(ranIdx);
// console.log(ranColor);
// console.log(box);
function levelUp(){
    userSeq = []; // reset userSequence to empty
   level++;
   h3.innerText = `Level ${level}`;
   // for random btn flash
   let ranIdx = Math.floor(Math.random()*3);// here *3 b/c box indice 0,1,2,3 i.e max = 3
   let ranColor = btns[ranIdx];// ranColor = class of such box's color
   let box = document.querySelector(`.${ranColor}`);// here access such box of class = ranColor
     gameSeq.push(ranColor);
     console.log(gameSeq);
   // a random btn will flash after started the game.
    gameFlash(box);
}

function gameFlash(box){
// apply setTimeOut(fun,250);
box.classList.add('flash');
setTimeout(()=>{box.classList.remove('flash')},250);
}

function userFlash(box){
    // apply setTimeOut(fun,250);
    box.classList.add('userFlash');
    setTimeout(()=>{box.classList.remove('userFlash')},150);
    }

    for(let btn of boxes){
      btn.addEventListener('click',btnPress);
    }    

function btnPress(){
//   console.log('Box Button was pressed.'); 
  // detect which function was pressed by user 
//   console.log(this);// here this means a box button 
  let btn = this;
//   userFlash(btn);
  // extract id of btn using btn.getAttributes(id);
  let userColor = btn.getAttribute('id');
//   console.log(`userColor : ${userColor}`);
  userSeq.push(userColor); 
//   console.log(userSeq);
  checkBtn(userSeq.length - 1);// last btn of user 
}



function checkBtn(idx){
    // console.log(`current Level : ${level}`);
    // size of gameSeq & userSeq  = current Level.
//    let idx = level-1;// this is a fixed idx , but we need to pass current level i.e which idx 
   if(userSeq[idx] === gameSeq[idx]){
    //  console.log('same color value .');
     if(userSeq.length == gameSeq.length){// case-2 : i.e last color of both seq are same then levelUp otherwise reset 
       setTimeout(levelUp(),1000);
     }
   }else{
     highScore = Math.max(highScore,level);
    h3.innerHTML= `Game Over!<i> Your score is : ${level}</i><br>Press a key to restart the game.`;
    bd.style.backgroundColor = 'red';
    setTimeout(()=>{
    bd.style.backgroundColor = 'white';
    },100);
    reset();
   }
}
function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

let scoreBtn = document.createElement('button');
scoreBtn.innerText = 'Get high Score';
scoreBtn.style.marginTop = '3rem';
bd.append(scoreBtn);
scoreBtn.addEventListener('click',()=>{
   if(highScore>0){
    h2.innerText = `your best score : ${highScore}`;
   }
});
 scoreBtn.addEventListener('dblclick',()=>{
  h2.innerText = 'Simon Says Game';
 });