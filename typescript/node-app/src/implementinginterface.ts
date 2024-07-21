interface Person{
    name:string,
    age:number,
    years?:number,
    greet(phrase:string):void ,
    speak:(num:number)=>void
}

class Employee implements Person { //it is not necessary to implement interface for class
    //but if you are implementing, we need to have all the things that are there in interface here
    name: string;
    age: number;
    years?: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }

    speak(num:number){
        console.log("hi friends")
    }
}

const e=new Employee("hari",12);
console.log(e.name)