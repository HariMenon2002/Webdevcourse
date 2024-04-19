//string manipulation

let str="hari is a good boy";
let s='ar';

console.log(str.length+"    hi")
console.log(str.indexOf(s))            //gives -1 if not present
console.log(str.lastIndexOf(s))    

console.log(str.slice(0,5))      //0 to 4th index
console.log(str)                //retains original string

console.log(str.replace('is','are'));
console.log(str)               //retains original string

console.log(str.split(" "));   //gives an array

console.log(str.toUpperCase())

let a=parseInt("42")   //converts to integer
a=parseInt("3.14")  //makes it 3
a=parseInt("42pxx")// makes it 42 and doesnt care about what is after
console.log(a) 


                        //ARRAYS

//you can do arr.push(30), .pop(), .shift() to put something out of arrayie left shift
//.unshift(10) will add 10 to the array 

let c=[1,2,3]
let b=[10,20,40]

console.log(c.concat(b))

function logThing(element){
    console.log(element)
}

b.forEach(logThing)    //call back logThing function to display each element

                    //CLASSES
class Animal{
    constructor(name,legCount){
        this.name=name;
        this.legCount=legCount
    }

    static myType(){          //static function
           console.log('Ani static')
    }
    speak(){
        console.log(`${this.name} makes a noise `+this.legCount);
    }
}

let dog=new Animal('richie',8);
dog.speak();
console.log(Animal.myType());
console.log(dog.name)