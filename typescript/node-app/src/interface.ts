//dealing with objects
interface User{

    firstName:string,
    lastName:string,
    age:number
    email?:string,  //this means email is optional
   
};


function isLegal(user:User){
    if(user.age>18){
        return true;
    }
    else{
        return false
    }
}

function greet2(user:User){
    console.log("hi there ")
}

isLegal({
    firstName:"harikrat",
    lastName:"Singh",
    age:20
})

//you can also extend interfaces
interface Man extends User{
    name:number;
}
interface Man1 extends User{
    name:string;
}