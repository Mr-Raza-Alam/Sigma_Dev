// DOM (Document Object Model)

// let smallImg = document.getElementsByClassName("oldImg");
// for(let i = 0; i<smallImg.length; i++){
//     console.dir(smallImg[i]);
// }

// let para = document.getElementsByTagName("p");
// para[1].innerHTML = "Hello This is spider man story.";
// console.dir(para);

const imge = document.querySelectorAll('.images img');
// console.dir(imge);
const para = document.querySelector('.box');
console.dir(para);
para.classList.add('blueBg');

const heading = document.querySelector('h1');
 heading.classList.add('green');

 // practice question
 const body = document.querySelector('body');
 // create a div of class = 'container';
 const diba = document.createElement('div');
 diba.classList.add('container');
 diba.style.height = '20rem';
 diba.style.width = '20rem';
 diba.style.backgroundColor = "grey";
 diba.style.border = '2px solid blue';
 diba.innerText = "Hello this new container.";
 // insert new created div into body tag
 body.insertAdjacentElement('beforeend',diba);
 const p1 = document.createElement('p');
 const head3 = document.createElement('h3');
 const diba2 = document.createElement('div');
 const p2 = document.createElement('p');
 const head1 = document.createElement('h1');
 diba2.classList.add('contain');
 diba2.style.height = '20rem';
 diba2.style.width = '20rem';
 diba2.style.marginTop = '2rem';
 diba2.style.backgroundColor = "pink";
 diba2.style.border = '2px solid black';
 diba2.innerText = "Hello this new contain.";
 body.append(diba2);
 p1.innerText = "Hey i'm red!.";
 p1.style.color = "red";
 head3.innerText = "I'm a blue h3!.";
 head3.style.color = "blue";
 diba.append(p1);
 diba.prepend(head3);
 head1.innerText = "I'm in a div2.";
 p2.innerText = "ME TOO!";
 diba2.prepend(head1);
 diba2.append(p2);

