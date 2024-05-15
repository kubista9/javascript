// Dynamic Typing:
// In dynamically typed languages, the data type of a variable is determined at runtime, not at compile time. This means that you don't need to declare the type of a variable explicitly; it can change during the execution of the program.
// Examples of dynamically typed languages include JavaScript, Python, and Ruby.
//js
let x = 5; // x is initially a number
console.log(typeof x); // Outputs: "number"
x = 'Hello'; // x is now a string
console.log(typeof x); // Outputs: "string"


// Static Typing:
// In statically typed languages, the data type of a variable is explicitly declared at compile time and cannot change during runtime. Variables must be explicitly typed, and type checking is performed at compile time.
// Examples of statically typed languages include Java, C, and C++.
//java
int x = 5; // x is explicitly declared as an integer
System.out.println(x); // Outputs: 5
x = "Hello"; // Compilation error: incompatible types: String cannot be converted to int


// Strong Typing:
// Strong typing refers to a language's enforcement of data type constraints. In strongly typed languages, operations on variables are restricted based on their data types. Implicit type conversion is limited, and type mismatches typically result in errors.
// Examples of strongly typed languages include Java, Python, and Haskell.
//python
x = 5
y = 'Hello'
z = x + y  // TypeError: unsupported operand type(s) for +: 'int' and 'str'


// Weak Typing:
// Weak typing, on the other hand, allows for more flexibility in type conversions. In weakly typed languages, type coercion is often performed implicitly, allowing variables to be used in contexts that would result in errors in strongly typed languages.
// Weak typing can lead to unexpected behavior if not used carefully, as it may perform implicit type conversions that can be difficult to predict.
// Examples of weakly typed languages include C and PHP.
//c
int x = 5;
char y = 'A';
int z = x + y; // z will contain the ASCII value of 'A' + 5 = 70
printf("%d\n", z); // Outputs: 70


// Dynamic vs. Static Typing: Refers to whether the data types are determined at runtime (dynamic) or at compile time (static).
// Strong vs. Weak Typing: Refers to the strictness of enforcing data type constraints, with strong typing being more restrictive and weak typing being more flexible.


//Static and Strong Typing:
int a = 5;
String b = "Hello";
int c = a + b; // Compile-time error

//Dynamic and Strong Typing:
a = 5
b = "Hello"
c = a + b  # Runtime error

//Static and Weak Typing:
int a = 5;
char *b = "Hello";
int c = a + (int)b; // Compiles, but may cause runtime issues

//Dynamic and Weak Typing:
let a = 5;
let b = "Hello";
let c = a + b; // "5Hello"