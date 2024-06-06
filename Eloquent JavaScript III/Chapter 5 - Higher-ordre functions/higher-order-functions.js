function greaterThan(n) {
    return m => m > n;
     }
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
    
// Functions that operate on other functions, either by taking them as ar- guments or by returning them, are called higher-order functions.