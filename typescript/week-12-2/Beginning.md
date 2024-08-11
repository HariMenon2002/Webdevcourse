Create a week-12-2 folder, do npm init -y and npx tsc --init
Change rootdir and outdir

Advanced TS APIs
1.Pick- Pick allows you to create a new type by selecting a set of properties(Keys) from an existing type(Type).Imagine you have a User model with several properties but for a user profile display you only need a subset of properties

2.Partial- makes all properties of a type optional,creating a type with the same properties, but each marked as optional. Specifically useful when you want to do updates.

3.Readonly- When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cant be changed

4.Record-Lets you give cleaner type to objects. It is a pure TS concept
5.Exclude- In a function that can accept several types of inputs but you want to exclude specific types from being passed to it

6.Type inference in zod- You can extract Typescript type of any schema with z.infer<typeof mySchema>

eg. 
const A=z.string();          //this is runtime variable
type B=z.infer<typeof A>;    //this is compile time variable

const u:A="asf"