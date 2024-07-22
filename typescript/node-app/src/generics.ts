/*
Step 10 - Generics
Generics are a language independent concept (exist in C++ as well)
Let’s learn it via an example
 
1. Problem Statement
Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
How would you solve this problem?
Solution

type Input=number|string
function getFirstElement(arr: Input[]) {
    return arr[0];
}

const el = getFirstElement([1, 2, 3]);
Copy
What is the problem in this approach?
User can send different types of values in inputs, without any type errors eg [1,2,"hari"]
But that can be solved if i do (arr: string[]|number[])


Typescript isn’t able to infer the right type of the return type

for eg if i do getFirstElement(["hri","menon"])
i should be able to do el.toUpperCase() as it should be a string("hri") but typescript does not recognize it
*/

//generics
//Generics enable you to create components that work with any data type while still providing compile-time type safety.

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString"); //now i can do output1.toUpperCase()
let output2 = identity<number>(100);


function getFirstElement<T>(arr:T[]):T{  //not necessary to put :T as it automatically recognized return type   
      return arr[0]
}

const el=getFirstElement<string>(["hari","menon"])
//const el1=getFirstElement([1,2]) //it will automatically recognize even if you dont put <number>

interface User3{
    name:string
}

const el2=getFirstElement<User3>([{name:"hari"},{name:"vikram"}])
console.log(el2.name)