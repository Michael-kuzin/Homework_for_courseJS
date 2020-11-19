// // 1 завдання
let arr = [2,3,4,5]
let result = 1;
 for(let i = 0;i < arr.length; i++) {
   result *= arr[i]
}

console.log(result);


 result = 1
let i = 0
 while(i < arr.length) {
  result *= arr[i]
     i++
 }
console.log(result);


// // 2 завдання
for(let i = 0; i <= 15; i++) {
  if(i % 2 == 0) {
    console.log( i + " " + "is even");
  } else {
    console.log(i + " " + "is odd");
  }
}


// // 3 завдання
let k = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randArray (n) {
    for(let i = 0;i < n; i++) {
      k[i] = getRandomInt(1,500)
    }
}
randArray(5);
console.log(k);


// 4 завдання

let number = prompt("Яке число ви хочете піднести до степені");
let power = prompt("До якої степені?");

function raiseToDegree(a,b) {
  a = Math.floor(a);
  b = Math.floor(b);
  return a ** b;
}

alert(`Число ${number} в степені ${power} буде ${raiseToDegree(number,power)}`)


// 5 завдання

function findMin() {
  return Math.min(...arguments) // використав ... spread який дозволяє розширити доступні для ітерації елементи
}

console.log(findMin(5,4,6,7,8,1));


// 6 завдання

function findUnique(arr) {
  let sortArr = arr.sort();
  for (let i = 0; i < sortArr.length; i++) {
   if (sortArr[i + 1] === sortArr[i]) {
     return false
   }
 }
 return true
}
console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));


// 7 завдання

function lastElem(arr,number) {
  let temp = 1;
  let arr2 = [];
  if(number <= arr.length) {
    for(let i = 0;i < number;i++) {
      arr2.unshift(arr[arr.length - temp])
      temp++
    }
  } else {
    let i = 0;
    while(i < arr.length) {
      arr2.unshift(arr[arr.length - temp])
      temp++
      i++
    }

  if(number) {
  return arr2
} else {
  return arr[arr.length - 1]
 }
}
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5],2));
console.log(lastElem([3, 4, 10, -5],8));


// 8 завдання
function capitalize(str) {

  return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
console.log(capitalize('i love java script'));
