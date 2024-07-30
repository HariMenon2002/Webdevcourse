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

async function getUser(email:any){
    try{
        await client.connect(); 
        const query='SELECT * FROM users WHERE email=$1';
        const value=[email];
        const result =await client.query(query,value);

        if(result.rows.length>0){
            console.log('user found:',result.rows[0]);
            return result.rows[0]
        }
        else{
            console.log("no such user found with given email");
            return null;
        }
    }catch(err){
        console.log('error during fetching user:',err);
        throw err;
    }finally{
        await client.end();
    }
}

//createUsersTable();
insertData();

//getUser("user5@example.com").catch(console.error);


//as you are using localhost database , you can do psql -h localhost -p 5432 -U postgres -d test3 and then type in sql commands directly