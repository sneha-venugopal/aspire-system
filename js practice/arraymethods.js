var products=["mobilephone","laptop","keychain","dolls","charger"];
products.push("notebook","pen");
products.pop();
products.map((product)=>{
    console.log(product);
})
var numbers=[1,2,3,4,5,6,7,8,9];
numbers.map((num)=>{
    console.log(num);
})
console.log("numbers greater than 5");
let num=numbers.find(index=>index>5);
console.log(num);
// Named function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

// Arrow function
const multiply = (x, y) => x * y;

// Immediately Invoked Function Expression (IIFE)
const result = (() => {
  const num1 = 10;
  const num2 = 5;
  return add(num1, num2) * multiply(num1, num2);
})();

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(add(3, 4)); // Output: 7
console.log(multiply(2, 5)); // Output: 10
console.log(result); // Output: 150 (because (10 + 5) * (10 * 5) = 150)
