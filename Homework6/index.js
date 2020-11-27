// 1 завдання
// document.getElementById("test").innerHTML = "Last" // 1 спосіб
// document.body.firstElementChild.innerHTML = "Last" // 2 спосіб

// 2 завдання

 // document.getElementsByClassName("image")[0].setAttribute('src','cat.jpg');


// 3 завдання

// let container = document.querySelector("#text");
//
// let elements = container.querySelectorAll("div > p");
//
// for (let i = 0; i < elements.length; i++) {
//   elements[i].insertAdjacentHTML("afterbegin", `Selector text ${i} :`);
// }


// 4 завдання

// let list = document.getElementById("list");

// 1 спосіб
// alert(list.firstElementChild.innerHTML);
// alert(list.lastElementChild.innerHTML);
// alert(list.firstElementChild.nextElementSibling.innerHTML);
// alert(list.lastElementChild.previousElementSibling.innerHTML);
// alert(list.firstElementChild.nextElementSibling.nextElementSibling.innerHTML);

// 2 спосіб
// alert(list.children[0].innerHTML);
// alert(list.children.length);
// alert(list.children[1].innerHTML);
// alert(list.children[3].innerHTML);
// alert(list.children[2].innerHTML);


// 5 завдання

// let body = document.body;
//
// let h1 = body.firstElementChild;
//
// h1.setAttribute("style", "background: #00e463");
//
// let div = document.getElementById("myDiv");
//
// let p1 = div.firstElementChild;
//
// p1.innerHTML = "<b> First paragraph </b> ";
//
// let p2 = div.firstElementChild.nextElementSibling;
//
// p2.setAttribute("style", "color: red");
//
// let p3 = div.children[2];
//
// p3.innerHTML = "<ins> Third paragraph </ins>";
//
// let p4 = div.lastElementChild;
//
// p4.innerHTML = "<em> Fourth paragraph </em>";
//
// let ul = document.getElementById("myList");
//
// ul.setAttribute("style", "display:flex; list-style:none;");
//
// let span = body.lastElementChild.previousElementSibling;
//
// span.setAttribute("style", "display:none");


// 6 завдання

// let text1 = prompt("Введіть повідомлення");
// let text2 = prompt("Введіть повідомлення");
//
// let input1 = document.getElementById("input1");
//
// input1.setAttribute("value", `${text1}`);
//
// let input2 = document.getElementById("input2");
//
// input2.setAttribute("value", `${text2}`);
//
// function swapValues() {
//   let temp = document.getElementById("input1").value;
//   document.getElementById("input1").value = document.getElementById(
//     "input2"
//   ).value;
//   document.getElementById("input2").value = temp;
// }
// swapValues();


// 7 завдання

// let html = document.documentElement;
//
// let body = document.createElement("body");
//
// html.appendChild(body);
//
// body.insertAdjacentHTML("afterbegin", "<main></main>");
//
// let main = body.firstElementChild;
//
// main.setAttribute("class", "mainClass check item");
// main.insertAdjacentHTML("afterbegin", "<div></div>");
//
// let div = main.firstElementChild;
//
// div.setAttribute("id", "myDiv");
// div.insertAdjacentHTML("afterbegin", "<p></p>");
//
// let p = div.firstElementChild;
//
// p.innerHTML = "First paragraph";
