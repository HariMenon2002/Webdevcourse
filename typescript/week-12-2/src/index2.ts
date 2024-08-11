//readonly

type User1={
    readonly name:string,
    readonly age:number
}
type User2={
     name:string,
     age:number
}

const user:User1={
    name:'John',
    age:23
}

//I cant do user.age=12 as it is readonly

//Instead of giving readonly for every variable in User1 , I can do

const u:Readonly<User2>={
    name:"hari",
    age:24
}


//exclude

type EventType='click'|'scroll'|'mousemove';
type ExcludeEvent=Exclude<EventType,'scroll'>;

const handleEvent=(event:ExcludeEvent)=>{
    console.log(`handling event:${event}`);
};

handleEvent('click');
//handleEvent('scroll');      gives error