//Date manipulation

const currentDate=new Date();

console.log(currentDate.getTime())     //we get no of milliseconds since 1970
// you can use this twice and take difference to get time taken by a piece of code
console.log(currentDate.getDate());
console.log(currentDate);
console.log(currentDate.getFullYear());

console.log(currentDate.getMinutes());
console.log(currentDate.getMonth());  //gives int

currentDate.setFullYear(2022);   //you can also do same for month etc
console.log('After setFullYear:',currentDate);


const user111={
    name:"hari",
    age:30
}

console.log(user111.name)

//JSON Object

const users='{"name":"Hari Menon","age":24,"gender":"male"}';
const user=JSON.parse(users)   //to convert to json
console.log(user['gender']);

const user1={
        name: "dd",
        gender:'female'
}

const finalString=JSON.stringify(user)
console.log(finalString)

// you can also do math objects, eg. Math.floor(2.3), Math.max(2,3,4)

//OBJECTS

function objectMethods(obj){
    console.log("original object",obj)

    let keys=Object.keys(obj);   //gives array of keys
    console.log("keys ",keys);

    let values=Object.values(obj);
    console.log("values ",values);


    let entries=Object.entries(obj);
    console.log("entries ",entries);


    let hasProp=obj.hasOwnProperty("property"); //checks if there is a key named property
    console.log("has own",hasProp)

    let newObj=Object.assign({},obj,{newProperty:"newValue"})  //adding extra keys to object
    console.log("new obj",newObj)

}

const sampleObject={
    key1:"value1",
    key2:"value2",
    key3:"value3"
}

objectMethods(sampleObject);




