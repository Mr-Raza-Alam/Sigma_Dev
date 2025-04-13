// university api

// let url = "http://universities.hipolabs.com/search?name=middle";

// async function getUni(){
//  try{
// //   let uni = await axios.get(url);
// //     // console.log(uni);
// //     // console.log(uni.data[0].country);

// //   for(let i = 0; i<10; i++){
// //     console.log(uni.data[i].country+"\n");
// //   }
//  }catch(e){
//     console.log(`error : \n${e}`);
//  }
// }

// let iBtn = document.querySelector('button');

//  function showColl(collArr){
//     let list = document.querySelector('.uniInfo');
//     list.innerText = "";// initialize with empty 
//     for(let col of collArr){
//       let li = document.createElement('li');
//       li.innerHTML = `<b>${col.name}</b>\n${col["state-province"]}`;
//     //   li.innerText = col.state-province;
//     // console.log(col["state-province"]);
//       list.appendChild(li);
//     //    console.log(col.name);
//     }
//  }

// iBtn.addEventListener("click",async()=>{
//     let inp = document.querySelector('input');
//     // console.log(`input value : ${inp.value}`);
//    let info = await getUni(inp.value);
//     // console.log(info.data);
//     showColl(info.data);
// //    console.log(info.data[0]) ;
// //    let value = Object.values(info.data[0]);
// //    for(let i = 0; i<value.length; i++){
// //     dibba.innerHTML = value[i]+'\n';
// //    }
// });
// let url = "http://universities.hipolabs.com/search?name=";// to add addtional info.. using query string
// // let country = "nepal";
// async function getUni(country){
//  try{
//    let uni = await axios.get(url+country);
//     // console.log(uni);
//     return uni;
//  }catch(e){
//     console.log(`error : \n${e}`);
//     return [];
//  }
// }

// Assignment-question -- find university of india based on given state
let sBtn = document.querySelector('button');

 function showColl(collArr){
    let list = document.querySelector('.uniInfo');
    let inp = document.querySelector('input');
    console.log(`input value : ${inp.value}`);
    list.innerText = "";// initialize with empty 
    for(let col of collArr){
     if(col["_code"] === "IN"){
      if(col["state-province"] === inp.value){
        let li = document.createElement('li');
          li.innerHTML = `<b>${col.name}</b>`;
          list.appendChild(li);
        //    console.log(col.name);
       }
     }
    }
 }

sBtn.addEventListener("click",async()=>{
   let info = await getUni2();
    console.log(info.data[0]["state-province"]);
    // showColl(info.data);
});
let url2 = "http://universities.hipolabs.com/search?name=india";
async function getUni2(){
 try{
   let uni = await axios.get(url2);
    // console.log(uni);
    return uni;
 }catch(e){
    console.log(`error : \n${e}`);
    return [];
 }
}


