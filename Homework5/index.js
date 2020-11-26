// 1 завдання

// let mentor = {
//   course: "JS fundamental",
//   duration: 3,
//   direction: "web-development",
// };
//
// // можна 1 спосібом
//
// function propsCount(currentObject) {
//   let counter = 0;
//   for (let key in currentObject) {
//     counter++;
//   }
//   return counter;
// }
//
// console.log(propsCount(mentor));
//
// // а можна ще 2 спосібом
//
// function propsCount2(currentObject) {
//   let arrOfkeys = Object.getOwnPropertyNames(currentObject);
//   let counter = 0;
//   for (let i = 0; i < arrOfkeys.length; i++) {
//     counter++;
//   }
//   return counter;
// }
//
// console.log(propsCount2(mentor));


// 2 завдання

// let myInfomation = {
//   name: "Mike",
//   surname: "Kuzin",
//   age: 18,
//   gender: "Male",
//   man: true,
// };
// // список його властивостей записаних в масив
// function showProps(obj) {
//   let arrOfkeys = Object.getOwnPropertyNames(obj);
//   let arrOfkeys2 = Object.values(obj);
//   return arrOfkeys;
// }
// console.log(showProps(myInfomation));
//
// // масив значень властивостей об’єкта
//
// function showProps2(obj) {
//   let arrOfkeys = Object.values(obj);
//   return arrOfkeys;
// }
// console.log(showProps2(myInfomation));


// 3 завдання

// class Person {
//   constructor(name, surname) {
//     (this.name = name), (this.surname = surname);
//   }
//
//   showFullName() {
//     return this.name + this.surname;
//   }
// }
//
// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname, year);
//     this.year = year;
//   }
//
//   showFullName(midleName) {
//     return this.name + " " + this.surname + " " + midleName;
//   }
//
//   showCourse() {
//     if (2020 - this.year > 6) {
//       return `you definitely entered in ${this.year} ?`;
//     } else {
//       return 2020 - this.year;
//     }
//   }
// }
//
// let stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());


// 4 завдання

class Worker {
  #experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    (this.fullName = fullName),
      (this.dayRate = dayRate),
      (this.workingDays = workingDays);
  }

  showSalary() {
    return this.fullName + " " + "salary:" + this.dayRate * this.workingDays;
  }

  showSalaryWithExperience() {
    return (
      this.dayRate * this.workingDays * this.#experience
    );
  }

  get showExp() {
    return this.#experience;
  }

  set setExp(value) {
    if (value < 0) {
      console.log("its imposible");
      return;
    }
    this.#experience = value;
  }

}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log("New experience: " + worker1.showExp);
console.log(worker1.fullName + " salary:" + " " + worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.fullName + " salary:" + " " + worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.showSalary());
console.log("New experience: " + worker2.showExp);
console.log(worker2.fullName + " salary:" + " " + worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log(worker2.fullName + " salary:" + " " + worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.showSalary());
console.log("New experience: " + worker3.showExp);
console.log(worker3.fullName + " salary:" + " " + worker3.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(worker3.fullName + " salary:" + " " + worker3.showSalaryWithExperience());

let arrOfWorkers = [worker1,worker2,worker3]

function sorted(arr) {
    arr.sort((a,b) => a.showSalaryWithExperience() > b.showSalaryWithExperience() ? 1 : -1)

}

sorted(arrOfWorkers)

console.log("Sorted salary:");
console.log(arrOfWorkers[0].fullName + ": " + arrOfWorkers[0].showSalaryWithExperience());
console.log(arrOfWorkers[1].fullName + ": " + arrOfWorkers[1].showSalaryWithExperience());
console.log(arrOfWorkers[2].fullName + ": " + arrOfWorkers[2].showSalaryWithExperience());

// 5 завдання

// class GeometricFigure {
//   constructor() {}
//   getArea() {
//     return 0;
//   }
//   toString() {
//     return Object.getPrototypeOf(this).constructor.name;
//   }
// }
//
// class Triangle extends GeometricFigure {
//   constructor(a, b) {
//     super(a, b);
//     (this.a = a), (this.b = b);
//   }
//   getArea() {
//     return (this.a * this.b) / 2;
//   }
// }
//
// class Square extends GeometricFigure {
//   constructor(side) {
//     super(side);
//     this.side = side;
//   }
//   getArea() {
//     return this.side ** 2; // або можна так Math.pow(this.side, 2)
//   }
// }
//
// class Circle extends GeometricFigure {
//   constructor(radius) {
//     super(radius);
//     this.radius = radius;
//   }
//   getArea() {
//     return Math.PI * this.radius ** 2;
//   }
// }
//
// function handleFigures(figures) {
//   for (let i = 0; i < figures.length; i++) {
//     if (figures[i] instanceof GeometricFigure) {
//       console.log(
//         "Geometric figure:" +
//           " " +
//           figures[i].toString() +
//           " " +
//           "- area:" +
//           " " +
//           figures[i].getArea()
//       );
//     }
//   }
//   return figures.reduce(function (accumulator, currentValue, index, array) {
//     return accumulator + currentValue.getArea();
//   }, 0);
// }
//
// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// console.log(handleFigures(figures));
