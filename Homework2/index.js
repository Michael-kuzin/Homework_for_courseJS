// 1 завдання
let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1);
console.log(typeof res1)

let res2 = String(Boolean(x)) + y
console.log(res2);
console.log(typeof res2)

let res3 = Boolean(x + y)
console.log(res3);
console.log(typeof res3);

let res4 = Number('string' + x + y)
console.log(res4);
console.log(typeof res4);

// 2 завдання

const number = prompt("Введіть число")
if(number % 2 == 0 && number > 0) {
  console.log("Це число є парним та додатним");
} else {
  console.log('Це число є не парним або не додатним');
}
if(number % 7 == 0) {
  console.log("Це число кратне 7");
} else {
  console.log("Це число не кратне 7");
}

// 3 завдання

let arr = [];
arr[0] = 228;
arr[1] = 'string';
arr[2] = true;
arr[3] = null;
alert(arr.length);
let element = prompt("Введіть любе значення");
arr[4] = element;
alert(arr[4]);
arr.shift();
alert(arr);


// 4 завдання

let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join('*'));


// 5 завдання

let isAdult = prompt("Скільки вам років?");
if(isAdult >= 18) {
  alert("Ви досялги повнолітнього віку")
} else if(isAdult <= 10) {
  alert("Ви ще надто молоді")
} else {
  alert("Ви тінейджер")
}


 // 6 завдання

const side1 = prompt("Введіть першу сторону трикутника");
const side2 = prompt("Введіть другу сторону трикутника");
const side3 = prompt("Введіть третю сторону трикутника");

if(isNaN(side1)) {
  console.log("Incorrect data");
}
if(isNaN(side2)) {
  console.log("Incorrect data");
}
if(isNaN(side3)) {
  console.log("Incorrect data");
}

let hypotenuse;
let cathetus1;
let cathetus2;

if( side1 > side2 && side1 > side3) {
  hypotenuse = side1
  cathetus1 = side2
  cathetus2 = side3
} else if ( side2 > side1 && side2 > side3) {
  hypotenuse = side2
  cathetus1 = side1
  cathetus2 = side3
} else if( side3 > side2 && side3 > side1) {
  hypotenuse = side3
  cathetus1 = side1
  cathetus2 = side2
}

if(side1 == side2 && side1 == side3) {
  console.log("трикутник рівнобедренний але не прямокутний");
} else if( hypotenuse ** 2 == cathetus1 ** 2 + cathetus2 ** 2 ) {
  console.log("трикутник прямокутний");
} else {
  console.log("трикутник не прямокутний");
}

let p = (Number(side1) + Number(side2) + Number(side3)) / 2
let s = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3))
console.log(s.toFixed(3));



// 7 завдання
let date = new Date();
let hours = date.getHours();

// 1 спосіб
let greeting = (hours >= 23 && hours <= 5) ? "Доброї ночі" :
(hours >= 5 && hours <= 11) ? "Доброго ранку" :
(hours >= 11 && hours <= 17) ? "Доброго дня" :
(hours >= 17 && hours <= 23) ? "Доброго вечора" :
 "Який дивний час)"

 alert(greeting);

// 2 спосіб
if(hours >= 23 && hours <= 5) {
  alert("Доброї ночі")
} else if (hours >= 5 && hours <= 11) {
  alert("Доброго ранку")
} else if (hours >= 11 && hours <= 17) {
  alert("Доброго дня")
} else {
  alert("Доброго вечора")
}
