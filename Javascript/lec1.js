console.log("hi");
//javascript is an interpreted language
//disadv - it is single threaded lang thus not scalable

let a=0;
console.log("hh"+a);
const b=[10,20];
console.log(b.length+' this is the length');

for(let i=0;i<b.length;i++){
    console.log(`$i`);
}

const users={
    firstName:"HARI",
    gender:"Male"
}

console.log(users['firstName'])

const alluser=[
    {
        firstName:"Hari",
        gender:"male"
    },
    {
        firstName:"raman",
        gender:"male"
    },

]

for(let i=0;i<alluser.length;i++)
{
    console.log(alluser[i]['firstName'])
}

function sum(a,b){
    return a+b;
}
const value=sum(1,2)
console.log(value)

//i can also pass fns ie .callbacks

function display(fnToCall){
    fnToCall(4)
    return "done"
}

function check(a){
    if(a%2==0) { console.log(2);}
}

const s=display(check)
console.log(s)

function greet(){
    console.log("Hello World")
}

setTimeout(greet,1*1000) //waits for 1s before calling greet  setInterval() can be used to call it after every 1s


