import { getClient } from "./utils";

async function createEntries() {
    const client = await getClient();
    const insertUserText = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';  //returns id
    const userValues = ['hari@gmail2.com', 'huss'];

    //There is a reason why i am not directly putting these userValues inside VALUES() eg VALUES('john.do11e@gmail2.com','hashed_password_here') ,of insertUserText and that is called sql injection
    //insertUserText is something which is input by the user and user can put some sql commands as well(say along with his name) with bad intentions(like dropping tables).This is called sql injection
    //When you give it seperately like here even if user tries to put some bad command, it will just be stored like text in db

    let response = await client.query(insertUserText, userValues); //$1 and $2 will represent the values in userValues array
    const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
    const todoValues = ['Buy food', 'chicken, meat, and eggs', response.rows[0].id, false]; //as we entered only one query in users, also response.rows will only have id attribute as we only asked for that
    await client.query(insertTodoText, todoValues);

    console.log("Entries created!");
}



createEntries();