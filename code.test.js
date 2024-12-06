const { fibonacciTailRecursive } = require('./code.js');

function testFibonacci() {
    console.log("test");

    console.assert(fibonacciTailRecursive(0) === 0, "Test 0 failed");
    console.assert(fibonacciTailRecursive(1) === 1, "Test 1 failed");
    console.assert(fibonacciTailRecursive(2) === 1, "Test 2 failed");
    console.assert(fibonacciTailRecursive(3) === 2, "Test 3 failed");
    console.assert(fibonacciTailRecursive(10) === 55, "Test 10 failed");
    console.assert(fibonacciTailRecursive(20) === 6765, "Test 20 failed");

    let errorThrown = false;
    try {
        fibonacciTailRecursive(-1);
    } catch (e) {
        errorThrown = true;
    }
    console.assert(errorThrown, "Negative input");

    console.log("pass");
}

testFibonacci();
