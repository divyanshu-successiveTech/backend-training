"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const math_1 = require("./lib/math");
const fs_1 = __importDefault(require("fs"));
const userInput = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
userInput.question("Enter first number ", (a) => {
    console.log(`First number is ${a}`);
    userInput.question("Enter second number ", (b) => {
        console.log(`Second number is ${b}`);
        let sum = (0, math_1.Add)(parseFloat(a), parseFloat(b));
        console.log("Sum  ", sum);
        let subtract = (0, math_1.Subtract)(parseFloat(a), parseFloat(b));
        console.log("Subtract ", subtract);
        let multiply = (0, math_1.Multiply)(parseFloat(a), parseFloat(b));
        console.log("Multiply ", multiply);
        let divide = (0, math_1.Divide)(parseFloat(a), parseFloat(b));
        console.log("Divide", divide);
        writing({ a, b, sum, subtract, multiply, divide });
        userInput.close();
    });
});
function writing({ a, b, sum, subtract, multiply, divide }) {
    const content = [["Operations", "num1", "num2", "Result"],
        ["Sum", `${a}`, `${b}`, `${sum}`],
        ["Subtract", `${a}`, `${b}`, `${subtract}`],
        ["Multiply", `${a}`, `${b}`, `${multiply}`],
        ["Sum", `${a}`, `${b}`, `${divide}`]
    ];
    const data = content.map(row => row.join(",")).join("\n");
    fs_1.default.writeFileSync('data.csv', data);
    console.log(data);
}
