//JavaScript gives us the functions JSON.stringify and JSON.parse to con- vert data to and from this format. The first takes a JavaScript value and returns a JSON-encoded string. The second takes such a string and converts it to the value it encodes:
let string = JSON.stringify({squirrel: false, events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]} 
console.log(JSON.parse(string).events);
// → ["weekend"]