const { StringStream,DataStream } = require("scramjet");
const fs= require('fs');
// require('./unzipper');

const getData=(id)=>({    id,name:'sumair'+id,})

const items= [
    {    id:1,name:'sumair',},
    {    id:1,name:'sumair',},
    {    id:1,name:'sumair',},
    {    id:1,name:'sumair',},
]

for (let index = 0; index < 10; index++) {
    const element = getData(index);
    items.push(element)
}

let data=[]
// DataStream
//    .from(items)
//    .map(
//       async (item,index) =>{ 
//           data.push({id: item.id, length: 'item.value.length'})
//           console.log('data',index);
//         }
//    )
  
const awaitFun=()=> new Promise((resolve,rejects)=>{
    console.log('set promise');
    setTimeout(()=>{
        console.log('set timeout sample 10');
        resolve('');

    },10)
})

const sample=async()=>{

    for await(let row of items){
        console.log(row);
        data.push({ rowData: row});
        if(data.length==4||data.length==6){
           await awaitFun();
        //     awaitFun()
        //    .then(e=>{console.log('then')})
        //    .catch(e=>{console.log('catch')})
            console.log('length');
        }
    }

    // await DataStream
    // .from(items)     // get from any readable stream
    // // .setOptions({ maxParallel: 4})
    // .do(async (row) => {
    //     console.log(row);
    //     data.push({ rowData: row});
    //     if(data.length==4){
    //        await awaitFun();
    //     //     awaitFun()
    //     //    .then(e=>{console.log('then')})
    //     //    .catch(e=>{console.log('catch')})
    //         console.log('length');
    //     }
    //   })
    //   .run();
 ;
}
;(async()=>
 {
    // await sample();
    console.log('sample ');
    console.log('code');
    console.log('to execute');
 })()
