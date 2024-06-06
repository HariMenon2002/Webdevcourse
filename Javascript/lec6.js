//NODE JS

//1.It is a run time environment and not a language
//2.Mainly helps in creating an http server


//map and filter functions
const input=[1,2,3,4,5]

function transform(i){
    return i*2;
}

const ans=input.map(transform)  
console.log(ans)

//filter function always returns true or false
function filterlogic(n){
    if(n%2==0){return true;}
    else{return false;}
}

const ans2=input.filter(filterlogic)
console.log(ans2)