/*Schema looks something like
 Tod{
    title:string,
    description:string,
    completed:boolean
 }
*/

const mongoose=require("mongoose");
//mongodb+srv://b20ec33:l0NVOiTPTWAncRHw@cluster0.itjmjiy.mongodb.net/todos

mongoose.connect("mongodb+srv://b20ec33:l0NVOiTPTWAncRHw@cluster0.itjmjiy.mongodb.net/todos");
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})

const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo:todo            //even if you write just todo also it is fine as key and value are same
}

