In the typescript folder first do npm install -g typescript
Then create a node-app folder
Go to the node-app folder and do npm init -y
Then do npx tsc --init

Create a.ts file
After writing the code, open the terminal and do tsc -b
Then a.js file will be created
Then we do node a.js

Then you can create dist and src folder and follow steps mentioned in Allabouttsconfig.md

Also create a .gitignore file and put dist there as i dont want to have these js files in my github


TypeScript is a programming language developed and maintained by Microsoft. 
It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

Typescript code never runs in your browser. Your browser can only understand javascript. 
Javascript is the runtime language (the thing that actually runs in your browser/nodejs runtime)
Typescript is something that compiles down to javascript
When typescript is compiled down to javascript, you get type checking (similar to C++). If there is an error, the conversion to Javascript fails. 


Typescript compiler
tsc is the official typescript compiler that you can use to convert Typescript code into Javascript
There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are - 
esbuild
swc