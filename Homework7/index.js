// 1 завдання

let myExternalWindow = window.open("", "", "width=300,height=300");

setTimeout(function () {
  myExternalWindow.resizeTo((width = 500), (height = 500));
}, 2000);

setTimeout(function () {
  myExternalWindow.moveTo(200, 200);
}, 4000);

setTimeout(function () {
  myExternalWindow.close();
}, 6000);



// 2 завдання

// let button = document.getElementById("button");
//
// changeCSS = () => {
//   let p = document.getElementById("text");
//   p.setAttribute(
//     "style",
//     "color: orange; font-size:20;font-family: Comic Sans MS"
//   );
// };
//
// button.addEventListener("click", changeCSS);


// 3 завдання


// let button1 = document.getElementById("blue");
// let button2 = document.getElementById("pink");
// let button3 = document.getElementById("brown");
// let a = document.getElementById("a");
//
// button1.addEventListener("click", () => {
//   let body = document.body;
//   body.setAttribute("style", "background :blue");
// });
//
// button2.addEventListener("dblclick", () => {
//   let body = document.body;
//   body.setAttribute("style", "background :pink");
// });
//
// button3.addEventListener("mousedown", () => {
//   let body = document.body;
//   body.setAttribute("style", "background :brown");
// });
//
// button3.addEventListener("mouseup", () => {
//   let body = document.body;
//   body.setAttribute("style", "background :white");
// });
//
// a.addEventListener("mouseover", () => {
//   let body = document.body;
//   body.setAttribute("style", "background :yellow");
// });
//
// a.addEventListener("mouseout", () => {
//   let body = document.body;
//   body.setAttribute("style", "background :white");
// });


// 4 завдання

// button.addEventListener("click", () => {
//   let select = document.getElementById("select");
//   select.removeChild(select.options[select.selectedIndex]);
// });


// 5 завдання

// let button = document.getElementById("button");
//
// button.addEventListener("click", () => {
//   let p = document.createElement("p");
//   p.innerHTML = "I was pressed!";
//
//   document.body.append(p);
// });
//
// button.addEventListener("mouseover", () => {
//   let p = document.createElement("p");
//   p.innerHTML = "Mouse on me!";
//
//   document.body.append(p);
// });
//
// button.addEventListener("mouseout", () => {
//   let p = document.createElement("p");
//   p.innerHTML = "Mouse is not on me!";
//
//   document.body.append(p);
// });


// 6 завдання


// window.addEventListener(
//   `resize`,
//   (event) => {
//     const windowOuterWidth = window.outerWidth;
//     const windowOuterHeight = window.outerHeight;
//     let p1 = document.getElementById("p1");
//     p1.innerHTML = `Width: ${windowOuterWidth},Height: ${windowOuterHeight}`;
//   },
//   false
// );


// 7 завдання

// let selectOfCountry = document.getElementById("country");
// let selectOfCities = document.getElementById("cities");
//
// selectOfCountry.addEventListener(
//   "change",
//   function () {
//     let selectOfCities = document.getElementById("cities");
//     let p = document.getElementById("p");
//     if (selectOfCountry.options[selectOfCountry.selectedIndex].value == "usa") {
//       while (selectOfCities.firstChild) {
//         selectOfCities.removeChild(selectOfCities.firstChild);
//       }
//       selectOfCities.insertAdjacentHTML(
//         "afterbegin",
//         "<option>New-York</option>,<option>Washington</option>,<option>Boston</option>,<option>Chikago</option>"
//       );
//       p.innerHTML = `${
//         selectOfCountry.options[selectOfCountry.selectedIndex].innerHTML
//       }`;
//     } else if (
//       selectOfCountry.options[selectOfCountry.selectedIndex].value == "ger"
//     ) {
//       while (selectOfCities.firstChild) {
//         selectOfCities.removeChild(selectOfCities.firstChild);
//       }
//       selectOfCities.insertAdjacentHTML(
//         "afterbegin",
//         "<option>Berlin</option>,<option>Koln</option>,<option>Hamburg</option>,<option>Munchen</option>"
//       );
//       p.innerHTML = `${
//         selectOfCountry.options[selectOfCountry.selectedIndex].innerHTML
//       }`;
//     } else if (
//       selectOfCountry.options[selectOfCountry.selectedIndex].value == "ukr"
//     ) {
//       while (selectOfCities.firstChild) {
//         selectOfCities.removeChild(selectOfCities.firstChild);
//       }
//       selectOfCities.insertAdjacentHTML(
//         "afterbegin",
//         "<option>Kiev</option>,<option>Lviv</option>,<option>Chernivtsi</option>,<option>Rivne</option>"
//       );
//       p.innerHTML = `${
//         selectOfCountry.options[selectOfCountry.selectedIndex].innerHTML
//       }`;
//     }
//   },
//   false
// );
//
// selectOfCities.addEventListener(
//   "change",
//   function () {
//     let p = document.getElementById("p");
//     p.innerHTML = `${
//       selectOfCountry.options[selectOfCountry.selectedIndex].innerHTML
//     },${selectOfCities.options[selectOfCities.selectedIndex].innerHTML}`;
//   },
//   false
// );
