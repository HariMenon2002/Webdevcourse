/*
Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.
Example 1 - Game 
Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.
*/

//there is no concept of enums in js

type a="up"|"down"|"left"|"right"
function doSomething1(keyPressed:a){
    if(keyPressed=="up"){

    }
}

doSomething1("down")  //i cant give anything else other than up,down, left ,right

//this is  a good solution but instead of this we can use enums

enum Direction{
    Up,
    Down,
    Left,
    right
}

enum Direction2{       //the good part about this is that now Direction.Up will not be zero instead it will be up
//if you are giving values, make sure you give it to all of them
    Up="up",
    Down="down",
    Left="left",
    right=30
}

function doSomething2(keyPressed:Direction){
     if(keyPressed==Direction.Up){

     }
}

doSomething2(Direction.Up);
doSomething2(Direction.Down);

//when i do console.log(Direction.Left) and run the js file it will give me 2 (its index number)


//can also be used in express if it is a .ts file
/*
const app=express()
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})
*/

//to install express in typescript do npm install express @types/express