function square(x) { return x * x; } 

console.log(square("hedgehog",true, 4, )); //NaN
console.log(square(true,"hedgehog", 4, )); //1
console.log(square(4,"hedgehog",true )); //16