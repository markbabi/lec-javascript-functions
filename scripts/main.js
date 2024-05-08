console.log("Hello JavaScript FUN-ctions");

function greetWorld() {
  console.log("Hello, world!");
  console.log("Bonjour, monde");
  console.log("¡Hola, mundo!");
  console.log("Hallo, Welt!");
  console.log("你好，世界！");
  console.log("Привет, мир!");
}

greetWorld();
greetWorld();
console.clear();

function greetPerson(person) {
  console.log("Hello " + person);
}

greetPerson("Umer");
greetPerson("Mark");
greetPerson();
console.clear();

function addTwoNumbers(num1, num2) {
  //   console.log("num1: ", num1);
  //   console.log("num2: ", num2);
  //   console.log("num3: ", num3);

  let sum = num1 + num2;
  console.log(sum);
}

addTwoNumbers(10, 20);
addTwoNumbers(100, 200);
addTwoNumbers("hello", 453098345);

console.clear();

function logArray(array) {
  for (let i = 0; i < array.length; i++) {
    // console.log(i);
    console.log(array[i]);
  }
}
let cats = ["Frank", "Lucy", "Meow", "Luna", "Mark"];

logArray(cats);
logArray([1, 2, 3, 4, 5]);
console.clear();
function subtractTwoNumbers(num1, num2) {
  let result = num1 - num2;
  return result;
}

let difference = subtractTwoNumbers(100, 50);
console.log("difference: ", difference);

console.log("difference2: ", subtractTwoNumbers(5, 3));

// let arrayResult = logArray(cats);
// console.log(arrayResult);
