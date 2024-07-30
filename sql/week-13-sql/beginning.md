You can directly clone repository from https://github.com/100xDevs-hkirat/week-13-sql
                         Or
Do npm init -y and npx tsc --init and then 
you can do npm install pg and npm install @types/pg
pg is like mongoose for postgress.Helps you connect to postgress via nodejs

Go to neondb and get a postgress url

Initially we will focus on create-table.ts and utils.ts

First I will make database part of the todo application
Suppose I have a users table having id, email and password and a todos table having id ,title, description, done and user_id

Some key terms:
1.SERIAL PRIMARY KEY means the primary key value will be given serially
2.VARCHAR(255) - string of max 255 characters
3.TEXT,INTEGER,BOOLEAN can also be used -eg. title TEXT
4.NOT NULL
5.DEFAULT eg title BOOLEAN DEFAULT FALSE
6.UNIQUE- eg. email VARCHAR(255) UNIQUE NOT NULL
6.REFERENCES- eg user_id INTEGER REFERENCES users(id)   {if users is another table}