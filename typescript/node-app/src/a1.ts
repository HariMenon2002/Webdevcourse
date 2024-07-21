function greet(firstName: string, age: number){  //you can also put firstName: any
    console.log("hello"+firstName)
}

greet("harikrat",34)

function sum(a:number,b:number):number{  //this means that it is returning a number 
    return a+b;
}

const value=sum(2,3);  //here even if i dont put const value:number=sum(2,3) it knows value is a number
console.log(value)


//create a function that takes another function as an input and runs it after 1s
function run(fn:()=>void){  //this means it is a function which takes in no parameters and returns nothing
    setTimeout(fn,1000)
}

run(function(){
    console.log("hi there")
})



function run1(fn:()=>number){  //this means it is a function which takes in no parameters and returns number
    setTimeout(fn,1000)
}

run1(function(){
    console.log("hi there")
    return 6
})

const greet1 = (name: string) => `Hello, ${name}!`;

const doSomething:(a:any)=>void=(a)=>{
    console.log("hello")
}   