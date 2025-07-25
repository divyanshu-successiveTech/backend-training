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

# Classes in Typescript
they are the blueprint for creating objects, encapsulating both data (properties) and behavior (methods) into a single, organized unit.
Key aspects of classes : 
1. They can have type annotations to ensure type safety.
2. These define the actions or functions that an object can perform.
3. Access modifiers : public(Accessible from anywhere), private(Accessible only within the class where they are declared), protected(Accessible within the class and its subclasses)
Inheritance : Classes can extend other classes using the extends keyword, allowing them to inherit properties and methods from a parent class.
Abstraction : They can contain abstract methods (methods without implementation) that must be implemented by concrete subclasses.

# Interfaces in Typescript 
They serve as powerful contracts that define the shape and structure of objects within your code.
Are a fundamental tool for ensuring type safety and building robust applications by specifying what properties and methods an object should have, along with their respective types. 
This ensures consistency and helps prevent errors during development.
Interfaces solely focus on the contract and structure of objects; they do not contain any implementation logic, initialization values, or actual function code.