# Introduction to TypeScript

TypeScript is a superset of JavaScript that adds **static typing**. It helps catch errors early and makes your code easier to understand.

## Why Use TypeScript?

- Detect errors at compile time
- Better code completion and hints
- Works with existing JavaScript code

## Installation

```bash
npm install -g typescript

## Compilation


tsc file.ts


## Example 
let message: string = "Hello, TypeScript!";
console.log(message);

## Types

let age: number = 25;
let isActive: boolean = true;
let names: string[] = ["Alice", "Bob"];

## Function

function greet(name: string): string {
  return "Hello, " + name;
}