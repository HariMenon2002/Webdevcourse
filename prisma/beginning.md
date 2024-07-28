First my task was to download postgres locally and download pgadmin- watch a youtube video

You can also download the prisma extension
Then I had to go through the installation section in prisma docs
After setting up everything , in the .env file modify the database url to what your database url is

The next part is to model your data in prisma schema eg.

model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String   @db.VarChar(255)
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])   //here id 
                                        //is actually id of user
  authorId  Int
}

model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  user   User    @relation(fields: [userId], references: [id])  //there is a rn
                                                        //between userId and id
  userId Int     @unique
}

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  posts   Post[]                            //array of posts
  profile Profile?
}

This is a schema which prisma will later convert to an sql schema

npx prisma migrate dev --name init    should be run each time you make changes in schema.
For eg. if you have added todos, you can do 
npx prisma migrate dev --name added todos

So basically this creates a migrations folder 


psql -h localhost -p 5432 -U postgres -d db  and then do \dt;   //this gives the relations in my database                   // exit by giving exit command


Create a src folder and in tsconfig.json uncomment rootDir and put "./src" 
Create a dist folder and in tsconfig.json uncomment outDir and put "./dist" 

Do tsc -b and run the js file (eg.create-user.js)  //now data has entered
Then do npx prisma studio which opens a website

Each time i make changes in create-post.ts and run it and do npx prisma studio, each post will be created


Refer https://github.com/100xDevs-hkirat/week-13-prisma/tree/master/src