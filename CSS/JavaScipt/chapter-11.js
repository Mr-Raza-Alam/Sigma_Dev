// Advance javaScript......
// 1) call stack
// function one(){// it triggered after getting two() 2 times via two() and one time via three() in stack frame
//     return 1;
// }
// function two(){// it triggered after getting two() via three() in stack frame
//     return one() + one();
// }
// function three(){// it trigged after getting three() in stack frame
//     let ans = two() + one();
//     console.log(`Answer : ${ans}`);
// }

// three(); // function three called here now
// console.log('Call stack & break point has been done');
// // inspect > source > file > jsfile > set any line as BreakPoint and track the stack call

// callback hell -- > it is the result of the process of callback nesting
// example 
 let h2 = document.querySelector('h2');
 // i want to change the color of h2's text after each second

//  setTimeout(()=>{
//     h2.style.color = 'red';
//  },1000);// after 1sec,h2's text turns into red.
//  setTimeout(()=>{
//     h2.style.color = 'yellow';
//  },2000);// after 2sec,h2's text turns into yellow.
//  setTimeout(()=>{
//     h2.style.color = 'green';
//  },3000);// after 3sec,h2's text turns into green.
//  setTimeout(()=>{
//     h2.style.color = 'blue';
//  },4000);// after 4sec,h2's text turns into blue

 // or 2nd way of executing of above 4 lines
//  function changeColor(color){
//  h2.style.color = color;
//  }

//  setTimeout(changeColor('red'),1000);
//  setTimeout(changeColor('yellow'),2000);
//  setTimeout(changeColor('green'),3000);
//  setTimeout(changeColor('skyblue'),4000);

//  // or 3rd way of executing of above 4lines
//   function change_Color_2(color,delay){
//     setTimeout(()=>{
//        h2.style.color = color;
//     },delay);
//   }

//   change_Color_2('pink',2000);
//   change_Color_2('brown',5000);
//   change_Color_2('skyblue',3000);
//   change_Color_2('yellow',4000);
//  // or 4th way alternatives of above 4 lines called callback hell

// apply promise on above callback hell

   function changeColor(color,delay){// this fun. return a promise to the caller that if promise is resovle state then it will complete the given work otherwise rejected will aooear 
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      resolve();// means promise successfully done 
      console.log(`${color} color is pasted on the text..`);
      h2.style.color = color;
     },delay);
     }
    );
   }    
changeColor('red',1000)
.then (()=>{
  // console.log('color has been changed!');
  //  console.log(this);
   return changeColor('orange',4000);
  })
.then(()=>{
  //console.log('color has been changed!');
  return changeColor('blue',4000);
}) 
.then(()=>{
  //console.log('color has been changed!');
  return changeColor('brown',5000);
})
.then(()=>{
 // console.log('color has been changed!');
  return changeColor('pink',5000);
})
.then(()=>{
 // console.log('color has been changed!');
  return changeColor('green',6000);
})
.catch(()=>{
  console.log("failure : weak connection");
});



//  function change_Color_3(color,delay,nxtColorfun){
//     setTimeout(()=>{
//        h2.style.color = color;
//      if(nxtColorfun){
//         nxtColorfun();
//      }
//     },delay);
//   }

//   change_Color_3('aliceblue',1000,()=>{// actually here callback helling is occurs
//     change_Color_3('orange',1000,()=>{
//       change_Color_3('purple',1000,()=>{
//         change_Color_3('violet',1000,()=>{
//           change_Color_3('peru',1000);// nextColorfun is not exists
//         });
//       });
//     });
//   });
  
// This is a first problem arises from Asynchronous nature of J 
// for its sol. js introduce the concept of promise.

// function saveToDB(data,suceess,failure){
//   let internetSpeed = Math.floor(Math.random()*10)+1;// a random no. from 1 to 10
//  if(internetSpeed > 4){
//   console.log();
//   suceess(data);
//  }else{
//   console.log(data);
//   failure();
//  }
// }
// confusing and complex callback occurs below i.e callback hell
// saveToDB('apna coding adda',
//   ()=>{
//   console.log(`successfully! data : has been stored.`);
//   // it should be like if previous data has stored successfully then other data can store into it
//  saveToDB('new learnig source',
//   ()=>{// 1st,2nd arguments
//   alert(`2nd data :  has also been stored successfully! `);
//   // it should be like if previous data has stored successfully then other data can store into it
//    saveToDB('new technology',
//     ()=>{// 1st,2nd arguments
//     console.log('3rd data successfully done!');
//    },
//    ()=>{// 3rd argument
//     console.log('3rd data is failure!');
//    });
//  },
//  ()=>{// 3rd argument
//   alert(`2nd data :  has not been stored Unsuccessfully! `);
//  });
// },
// ()=>{
//   console.log(`Failure! data : has not been stored.`);
// });

// Promise
function saveToDB(data){
  return new Promise((resolve,reject)=>{// success, failure
    let internetSpeed = Math.floor(Math.random()*10)+1;// a random no. from 1 to 10
    if(internetSpeed>4){
      resolve(`success : ${data} was saved`);
    }else{
      reject('failure : weak connection');
    }
  }); 
}


 // optimise the called fuction from callback hell to promise
  
// let request = saveToDB('new technology');// request is promise's object
// request.then(()=>{
//   console.log('prommise was fullfilled');
//   console.log(request);
// })// and 
// .catch(()=>{
//   console.log('promise was rejected');
//   console.log(request);
// });

// or compact way of declaring object lines of code
// saveToDB('coding adda')
//  .then(()=>{
//   console.log('promise was resolved');
//  })
//  .catch(()=>{
//    console.log('promise was denied');
//  });

// // improved version of Promise i.e promise chaining

// saveToDB('DBMS')
// .then(()=>{
//   console.log('data1 saved.');
//   saveToDB('OOP')
//   .then(()=>{
//   console.log('data2 saved.');
//    saveToDB('PYTHON')
//    .then(()=>{
//   console.log('data3 saved.');
//    }
//    )
//   })
// })
// .catch(()=>{
// console.log('promise was rejected.');
// });

// or more compact and readable way of above promise chaining
// saveToDB('Agentioc AI')
// .then((result)=>{
//   console.log(`data1 has stored`);
//   console.log(`result of promise : ${result}`);
//   return saveToDB('Generative AI'); // here we are returning promise object
// })
// .then((result)=>{// it encountere on result of last return value value of promise
//   console.log(`data 2 has stored`);
//   console.log(`result of promise : ${result}`);
//   return saveToDB('Quantum AI');
// })
// .then((result)=>{
//   console.log('data 3 has stored. ');
//   console.log(`result of promise : ${result}`);

// })
// .catch((error)=>{
//   console.log('promise was rejected');
//   console.log(`result of promise : ${error}`);
// })


