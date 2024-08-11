//records and maps

type User3={
    id:string,
    username:string
}

type Users3={
   [key:string]:User3;   //ie key is a string whose value is a User3
}

const users:Users3={
    "ras@qd1":{
        id:"ras@qd1",
        username:'harikrat'
    },
    "ras@qd2":{
        id:"ras@qd2",
        username:'hari'
    },
}

//but this is very ugly     

type Users33=Record<string,User3>;  //and give this type in const users ie const users:Users33


//more practise
type a=Record<string,{age:number,name:string}>;
const b:a={
    "er":{age:21,name:'hh'},
    "er2":{age:33,name:'hddd'},
}

console.log(b['er'])

//Map can be used in js as well, key -value pairs
const mapuser=new Map()
mapuser.set("rag@qs1",{name:"Ras",age:30,email:"ras@qd"})
mapuser.set("sarah@qs1",{name:"Sarah",age:32,email:"sarah@qd"}) 

const us=mapuser.get("rag@qs1");
console.log(us)
mapuser.delete("rag@qs1")

//you can also do 

const mapuser2=new Map<string,User3>()
mapuser2.set('re@we',{id:'ra',username:"rasss"})