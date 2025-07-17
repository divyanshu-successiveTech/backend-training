import lodash from 'lodash';

export const Add=(num1:number,num2:number)=>{
    return lodash.add(num1,num2)
}

export const Subtract=(num1:number,num2:number)=>{
    return lodash.subtract(num1,num2)
}

export const Multiply=(num1:number,num2:number)=>{
    return lodash.multiply(num1, num2)
}

export const Divide=(num1:number,num2:number)=>{
    return lodash.divide(num1,num2)
}


// module.exports={
//     Add,
//     Subtract,
//     Multiply,
//     Divide
// }