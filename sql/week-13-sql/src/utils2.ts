//doing it with localhost

// write a function to create a users table in your database.
import { Client } from 'pg'
//if you have typescipt issues, convert this to js file ie utils2.js and do 
//const {Client}=require('pg');
 
const client = new Client({
  connectionString: "postgresql://postgres:LORD SHIVA@localhost:5432/test3?schema=public"  //create a test3 database in pgadmin
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

async function insertData(){
    try{
        await client.connect();
        const insertQuery="INSERT INTO users (username,email,password) VALUES ('username2','user@example.com','userpassword');";
        const res=await client.query(insertQuery);
        console.log('insertion success:',res);
    }catch(err){
        console.log('error during insertion:',err);
    }finally{
        await client.end();//close client connection
    }
}

//createUsersTable();
insertData();

//if i was doing it locally it would have been 
//"postgresql://postgres:mysecretpassword@localhost/postgres    "
//"postgresql://postgres:LORD SHIVA@localhost:5432/test3?schema=public"