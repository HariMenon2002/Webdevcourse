const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://b20ec33:l0NVOiTPTWAncRHw@cluster0.itjmjiy.mongodb.net/userappnew");//userapp new is the database where i want to store thus we have to write it in the link

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
    