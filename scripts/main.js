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
