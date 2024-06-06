//Asynchronous programming
//even if js is single threaded it can context switch between tasks and also delegate

//setTimeout(fn, 1000) is an asynchronous fn 

//fs.readFile and Fetch are some other asynchronous fns

const fs=require('fs');

fs.readFile("a.txt","utf-8",function(err,data){
      console.log(data)
})

console.log("hey")  //this would run first
let a=0;

for(let i=0;i<10000;i++){    //even if async call is complete in between this,it has to wait as control can go back only if thread is idle ,ie after this loop
    a++;
}

console.log('2')
console.log('3')


//PROMISES

//they dont have callbacks , so it is not much ugly

function kirat(){
    return new Promise(                    //returns a promise
        function(resolve){
            fs.readFile("a.txt","utf-8",function(err,data){
                resolve(data);
            });
        }
    )
}

function onDone(data){
    console.log(data)
}

kirat().then(onDone); //try doing var a=kirat()   



var d=new Promise(function(resolve){
        setTimeout(function(){
            resolve("foo");        
        },1000)
          
});

console.log(d)    //intially it will be promise pending as i have put settimeout of 1s and then only resolve

d.then(onDone)


//Async and await

function kiratAsync(){
    let p=new Promise(function(resolve){
        resolve("async is on");
    });
    return p;
}

async function main1(){
    let value=await kiratAsync();
    console.log("test1")
    console.log(value);
}

main1();
console.log("main")