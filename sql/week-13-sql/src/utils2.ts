//doing it with localhost

// write a function to create a users table in your database.
import { Client } from 'pg'
 
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

createUsersTable();

//if i was doing it locally it would have been 
//"postgresql://postgres:mysecretpassword@localhost/postgres    "
//"postgresql://postgres:LORD SHIVA@localhost:5432/test3?schema=public"