//Calculator functions

function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    let value = a*1.0 / b;
    if(!isFinite(value))
        throw new RangeError('Divide-by-zero');
    else
        return value;
}

module.exports = {
    add : add,
    substract: substract,
    multiply : multiply,
    divide : divide
}