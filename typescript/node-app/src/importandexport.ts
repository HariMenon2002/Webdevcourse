// TypeScript follows the ES6 module system, using import and export statements to share code between different files. Here's a brief overview of how this works:
// 1. Constant exports
// math.ts

//very similar to react
export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}

//main.ts
/*
import { add } from "./math"

add(1, 2)
*/

//2. Default exports
//calculator.ts 
/*
export default class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}


import Calculator from './Calculator';  //ie when you use default you can directly write instead of {Calculator}

const calc = new Calculator();
console.log(calc.add(10, 5));
*/

export const a=8;

const b=5
export default b;    

//now i can do import b,{a} from "./importandexport"