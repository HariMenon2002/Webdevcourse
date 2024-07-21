The tsconfig file has a bunch of options that you can change to change the compilation process.
Some of these include
 
1. target
The target option in a tsconfig.json file specifies the ECMAScript target version to which the TypeScript compiler will compile the TypeScript code.
To try it out, try compiling the following code for target being ES5 and es2020

const greet = (name: string) => `Hello, ${name}!`;

output for es5 
"use strict";
var greet = function (name) { return "Hello, ".concat(name, "!"); };

output for es2020
"use strict";
const greet = (name) => `Hello, ${name}!`;

2. rootDir
Where should the compiler look for .ts files. Good practise is for this to be the src folder

create an src and dist directory, then in the tsconfig file uncomment rootDir and put "./src"

3. outDir
Where should the compiler look for spit out the .js files.
in tsconfig file uncomment outDir and put "./dist"
Then i can do node  dist/a.js

4. noImplicitAny
Try enabling it and see the compilation errors on the following code - 
const greet = (name) => `Hello, ${name}!`;
Then try disabling it
5. removeComments
Weather or not to include comments in the final js file
 