//learning more about axios library
const axios=require("axios");

//using fetch
async function main1(){
    const response=await fetch("https://sum-server.100xdevs.com/todos")
    /*
    for post request i can do
    const response=await fetch("https://sum-server.100xdevs.com/todos",{
        method:"POST",
        body:{
            username:"harkirat",
            password:"12344"
        },
        headers:{
            "Authorization":"Bearer 123"
        },
    })
    */
    const json=await response.json(); //if the site gives you text data, do const data=await response.text() and console.log(data)
    console.log(json.todos.length)
}


//using axios
async function main(){
    const response=await axios.get("https://sum-server.100xdevs.com/todos");
    console.log(response.data.todos.length)  //if it is textual data, i just have to do response.data
}

//i can also do post, put ,delete eg. axios.post()

/*
const response=await axios.get("https://sum-server.100xdevs.com/todos",{
    username:"harkirat",
    password:"12344"
},{
    headers:{
        "Authorization":"Bearer 123"
    }
});

body can be the second argument 
In a get request here, you can never send a body
*/

//axios can also be written like
async function main3(){

    const response=await axios({
        url:"",
        method:"POST",
        headers:{
            Authorization:"Bearer 123"
        },
        data:{                    //used instead of body
            username:"harikirat"
        }
    })
    console.log(response)
}

main();