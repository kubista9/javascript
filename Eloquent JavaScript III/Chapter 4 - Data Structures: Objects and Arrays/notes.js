// When using square brackets, the expression between the brackets is evaluated to get the property name. Whereas value.x fetches the property of value named “x”, value[x] takes the value of the variable named x and uses that, converted to a string, as
// the property name.

let doh = 'Doh';
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase);

let sequence = [1,2,3];
console.log(sequence.pop);
console.log(sequence.push(4));
console.log(sequence.toString);
