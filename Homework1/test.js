// 2 завдання
console.log("Kuzin");


// 3 завдання
let first;
let second;
first = 1;
second = 2;
// alert(first,second); цей алерт виведе 1 2
first = second;
alert(first,second); // наскільки помню два алерта не можуть працювати в js тому перший закоментував


// 4 завдання
const obj = {
  string: "string",
  number: 228,
  boolean: true,
  undefined: undefined,
  null:null
}


// 5 завдання
let isAdult = confirm("Ти вже досяг повнолітнього віку?");
console.log(isAdult)


//6 завдання
const name = "Michael";
 typeof name // string
const surname = "Kuzin";
 typeof surname // string
const studyGroup = "Lv-548.JS Core";
 typeof studyGroup // string
const yearOfBirth = 2002;
 typeof yearOfBirth // number
let maritalStatus = false;
 typeof maritalStatus // boolean

console.log(yearOfBirth,maritalStatus,name,surname,studyGroup);

let empty = null;
let nothing = undefined;
console.log(typeof empty,typeof nothing);


// 7 завдання
const user = prompt("Вкажіть ваш логін будьласка");
const email = prompt("Вкажіть ваш емейл будьласка");
const password = prompt("Вкажіть ваш пароль будьласка");
alert(`Шановний ${user} ваш емейл є ${email} ваш пароль ${password}`)


// 8 завдання
const secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;
console.log(secondsInHour,secondsInDay,secondsInMonth);
