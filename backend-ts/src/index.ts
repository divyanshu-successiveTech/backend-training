import readline from 'readline';
import { Add, Divide, Multiply, Subtract } from './lib/math';
import fs from 'fs'

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


userInput.question("Enter first number ",(a)=>{
    console.log(`First number is ${a}` )

    userInput.question("Enter second number ",(b)=>{
        console.log(`Second number is ${b}` )
        let sum=Add(parseFloat(a),parseFloat(b))
        console.log("Sum  ",sum)
        let subtract=Subtract(parseFloat(a),parseFloat(b))
        console.log("Subtract ",subtract)
        let multiply=Multiply(parseFloat(a),parseFloat(b))
        console.log("Multiply ",multiply)
        let divide=Divide(parseFloat(a),parseFloat(b))
        console.log("Divide",divide)

        writing({a,b,sum,subtract,multiply,divide})
        userInput.close()
    })
    
})

interface Parameters{
    a:string,
    b:string,
    sum:number,
    subtract:number,
    multiply:number,
    divide:number
    
}


function writing({a,b,sum,subtract,multiply,divide}:Parameters){
    const content = [["Operations","num1","num2","Result"],
        ["Sum",`${a}`,`${b}`,`${sum}`],
        ["Subtract",`${a}`,`${b}`,`${subtract}`],
        ["Multiply",`${a}`,`${b}`,`${multiply}`],
        ["Sum",`${a}`,`${b}`,`${divide}`]
    ]

    const data = content.map(row => row.join(",")).join("\n");


    fs.writeFileSync('data.csv',data);

    console.log(data);
}



