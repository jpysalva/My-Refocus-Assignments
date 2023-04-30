let obj = {
    num1: 100,
    num2: 50,
    sum: 150,
    difference: 50,
    product: 500,
    quotient: 20,
}

function showData(){
    console.log("======================");
    console.log(`First Number: ${obj.num1}`);
    console.log(`Second Number: ${obj.num2}`);
    console.log(`The sum is: ${obj.sum}`);
    console.log(`The difference is: ${obj.difference}`);
    console.log(`The product is: ${obj.product}`);
    console.log(`The quotient is: ${obj.quotient}`);
}

// console.log("===================");
// console.log(`First Number: ${obj.num1}`);
// console.log(`Second Number: ${obj.num2}`);
// console.log(`The sum is: ${obj.sum}`);
// console.log(`The difference is: ${obj.difference}`);
// console.log(`The product is: ${obj.product}`);
// console.log(`The quotient is: ${obj.quotient}`);

function add(num1, num2){
    let addResult = (num1 + num2);
    return addResult;
}

function minus(num1, num2){
    let minusResult = (num1 - num2);
    return minusResult;
}

function multiply(num1, num2){
    let multiplyResult = (num1 * num2);
    return multiplyResult;
}

function divide(num1, num2){
    let divideResult = (num1 / num2);
    return divideResult;
}

function newSetOfNumbers(num1, num2){
    obj.num1 = num1;
    obj.num2 = num2;
    var addOutput = add(num1, num2);
    var minusOutput = minus(num1, num2);
    var multiplyOutput = multiply(num1, num2);
    var divideOutput = divide(num1, num2);
    obj.sum = addOutput;
    obj.difference = minusOutput;
    obj.product = multiplyOutput;
    obj.quotient = divideOutput;
}

showData(obj);
newSetOfNumbers(200, 10);
showData(obj);
newSetOfNumbers(500, 20);
showData(obj);
