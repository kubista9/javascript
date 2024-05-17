let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2); // → true
console.log(object1 == object3); // → false

object1.value = 15;
 console.log(object2.value);
 // → 15
 console.log(object3.value);
 // → 10

const score = {visitors: 0, home: 0}; // This is okay
score.visitors = 1;
console.log(score)
// { visitors: 1, home: 0 }

console.log([1, 2, 3, 2, 1].indexOf(2));
 // → 1
 console.log([1, 2, 3, 2, 1].lastIndexOf(2));
 // → 3


console.log([0, 1, 2, 3, 4].slice(2, 4)); // → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]