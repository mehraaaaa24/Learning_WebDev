function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data) {
    console.log("the result is " + data);
}

function displayResultPassive(data) {
    console.log("the end result is " + data);
}

const ans = sum(1, 2, displayResult);