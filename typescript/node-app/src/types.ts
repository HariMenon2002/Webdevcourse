//Types are similar to interfaces
//Lets you aggregate data together

type User1={
    firstName:string,
    lastName:string,
    age:number;
}

//you cant implement classes with types
function isLegal1(user:User1){

}

// //they let you do some other things

// 1. Unions
// Let’s say you want to print the id of a user, which can be a number or a string.

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202");

// 2. Intersection
// What if you want to create a type that has every property of multiple types/ interfaces

type Employee1 = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee1 & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
  

  type TeamLead1 = Employee1 | Manager;

  const teamLead1: TeamLead1={
    name:"hari",
    department:"ece"
  }


//you can also do something like
interface Manager3{
    name:string;
}

type techLead={
    time:Date;
}

type Both=Manager3 & techLead;