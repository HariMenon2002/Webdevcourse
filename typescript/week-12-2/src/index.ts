//Advanced typescript apis
interface User{
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}
// function sumOfAge(user1:User,user2:User){
//     return user1.age+user2.age;
// }

// const age=sumOfAge({name:'Taro',age:20},{name:"Jiro",age:30 });
// console.log(age);


//suppose I am allowed to update only name,age and password of the user and not other parameters. Either i can give name, password and age as parameters in the update function (but that would be a lot of parameters) or I create an interface for just those 3 parameters ,eg

/*
interface UpdateProps{
    name:string,
    age:number,
    password:string
}

function updateUser(updatedProps:UpdateProps){
    //hit database to update user
}
*/

//but this approach is bad as eg if i change type of age from number to string in User interface, I would have to change it in UpdataProps as well

//Here is where we will use Pick

type UpdataProps=Pick<User,'name'|'age'|'email'>

//you can also have a partial
type UpdatePropsOptional=Partial<UpdataProps>   //now all those parameters are optional,works like ?

function updateUser(updatedProps:UpdataProps){  //you can also give UpdatePropsOptional here as well
    
    //hit database to find user
}

updateUser({
    name:"asd",
    age:123,
    email:"res@gmail.com"

})



