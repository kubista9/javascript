// = Assignment operator. Assigns the value on the right to the variable on the left.
let x = 10; // Assigns the value 10 to the variable x

// == Loose equality comparison operator. Compares two values for equality after converting both values to a common type (type coercion).
let a = 100;
let b = '100';
console.log(a == b); // true, because '100' is converted to 100 before comparison
console.log('100' == 100); // true, because '100' is converted to 100 before comparison
console.log(0 == false); // true
console.log(null == undefined); // true

// === Strict equality comparison operator. Compares two values for equality without converting their types.
console.log(a === b); // false, because 100 (number) is not the same type as '100' (string)
console.log(0 === false); // false
console.log(null === undefined); // false
