export function add(x1,x2){
    return x1 + x2
};

export function subtract(x1,x2){
    return x1 - x2
}

export function multiply(x1,x2){
    return x1 * x2
}

export function divide(x1,x2){
    if(x2 === 0){
        return 'No se puede dividir entre 0'
    }else{
        return x1/x2
    }
}

// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// }

export default {
    add,
    subtract,
    multiply,
    divide
}