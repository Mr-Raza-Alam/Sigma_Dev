// let div = document.querySelector('.outerbox');
// let ul = document.querySelector('ul');
// let li = document.querySelectorAll('#list');
// let bd = document.querySelector('body');
// div.addEventListener("mouseenter",()=>{
//     bd.classList.add('main_Box');
//     console.log("div was mouserentered.");
// });
// ul.addEventListener('click',()=>{
//   bd.innerHTML = '<h2>This is Event Bubbling</h2>';
//   console.log("unoderlist was clicked on.");
// })
// for(let l of li){
//   l.addEventListener('mouseout',()=>{
//         // div.classList.remove('outerbox');
//         console.log("list item on.");
//    });
// }

// minor-project :  TODO App
 let inp = document.querySelector('input');
 let ul = document.querySelector('ul');
 let btn = document.querySelector('#todoBtn');
 btn.addEventListener('click',()=>{
    let lis = document.createElement('Li');
     lis.innerHTML= `<b>${inp.value}</b>`;
      ul.appendChild(lis);// want to add as ul>li i.e child of unorderlist
    let lsbtn = document.createElement('button');
    lsbtn.classList.add('delBtn');
    lsbtn.innerHTML = 'remove';
    lis.appendChild(lsbtn);
      inp.value = "";// add empty input after set into list
 });
 // using event delgation....
 ul.addEventListener('click',(event)=>{
    //  let bt = document.querySelector('.delBtn');
    //  let item = bt.parentElement;
    //  console.log(item.firstChild.innerHTML);
    //  console.log(item.firstElementChild);// both are same
   // or alternative way
    if(event.target.nodeName == 'BUTTON'){
      let item = event.target.parentElement;
     alert(`${item.firstChild.innerHTML} has been removed out.`);
    //  console.dir(event.target.parentElement);
     item.remove();
    }else{
      alert('Sorry! you click wrong button. please click on remove button.');
    }
 });


//  let btns = document.querySelectorAll('.delBtn'); 
// for(let bt of btns){
//   let item = bt.parentElement;// here we will get parent element of each new created delete button 
//     item.addEventListener('click',()=>{// here we want to apply bubbling properties of eventListener
//       // but it is also not applicable So, we have to apply it separately
//         alert(`${item.value} has been removed`);
//         item.remove();
//     });
//}