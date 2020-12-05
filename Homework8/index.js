// 1 Task
// function UpperCase(str) {
//
//     if(/^[A-Z]/.test(str)) {
//       return "String's starts with uppercase character"
//     }
//
//   return "String's not starts with uppercase character"
// }
// console.log(UpperCase('req'));
// console.log(UpperCase('Req'));

// 2 Task

// function CheckEmail(email) {
//   let pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//
//   return pattern.test(email)
// }
//
// console.log(CheckEmail("Qmail2@gmail.com"));
// console.log(CheckEmail("Qmail2gmailcom"));

// 3 Task

// jQuery(document).ready(function ($) {
//   let head = $(".head");
//   head.css("background", "green");
//   let inner = head.find(".inner");
//   inner.css("font-size", "35px");
// });


// 4 Task

// window.onload = function () {
//   let inp = document.getElementsByTagName("INPUT");
//   let chk_boxes = [];
//   let cnt = 0;
//   for (let ee = 0; ee < inp.length; ++ee) {
//     let e = inp[ee];
//     if (e.type !== "checkbox") continue;
//     chk_boxes.push(e);
//     e.addEventListener("change", function () {
//       let need = false,
//         state;
//       if (this.checked) {
//         ++cnt;
//         need = cnt === 3;
//         state = true;
//       } else {
//         --cnt;
//         need = cnt === 2;
//         state = false;
//       }
//       if (need) {
//         chk_boxes.forEach(function (c) {
//           if (!c.checked) {
//             c.disabled = state;
//           }
//         });
//       }
//     });
//   }
// };

    // 2 Більш давній спосіб тут з використанням змінної var
   // перший більш краще виглядає але я подумав чомуб не написати ще цей якщо знаю
   // window.onload = function () {
   //   for (
   //     var inp = document.getElementsByTagName("input"),
   //       chb = [],
   //       j = 0,
   //       J = inp.length;
   //     j < J;
   //     j++
   //   )
   //     if (inp[j].type == "checkbox") {
   //       chb.push(inp[j]);
   //       inp[j].onclick = function () {
   //         for (var j = (k = 0), J = chb.length; j < J; j++) {
   //           if (chb[j].checked) k++;
   //           if (k == 3) {
   //             mDis();
   //             break;
   //           }
   //         }
   //       };
   //     }
   //   function mDis() {
   //     for (var j = (k = 0), J = chb.length; j < J; j++)
   //       if (!chb[j].checked) chb[j].disabled = 1;
   //   }
   // };

// 5 Task

  // 1 спосіб з рус розкладкою
// let re = /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+)/;
// let str = 'Джава Скрипт';
// let newstr = str.replace(re, '$2, $1');
// console.log(newstr);

  // 2 спосіб з використанням функції (це не зовсім по завданню але чому ні)) )
// function ABBA(s) {
//     let a = s.split(" ");
//     if( a.length < 2) return s;
//     return [ a[1], a[0]].concat( a.splice( 2, a.length)).join(" ");
// }
// console.log(ABBA("Java Script"));

  // 3 спосіб за англ і використанням реплс все як в завданні
// let str = "Java Script";
// let req = str.replace(/^([^\s]+)(\s+)([^\s]+)/, '$3$2$1');
// console.log(req);


// 6 Task

// function validateCardNumber(number) {
//   let regex = new RegExp("^[0-9]{16}$");
//   if (!regex.test(number)) return false;
//
//   return luhnCheck(number);
// }
//
// function Check(val) {
//   let sum = 0;
//   for (let i = 0; i < val.length; i++) {
//     let intVal = parseInt(val.substr(i, 1));
//     if (i % 2 == 0) {
//       intVal *= 2;
//       if (intVal > 9) {
//         intVal = 1 + (intVal % 10);
//       }
//     }
//     sum += intVal;
//   }
//   return sum % 10 == 0;
// }
// console.log(validateCardNumber(9999 - 9999 - 9999 - 9999));

// 7 Task

// function ValidateEmail(email) {
//   let req = RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
//
//   if (new RegExp("-", "g").test(email)) {
//     let arr = email.match(new RegExp("-", "g"));
//     if (arr.length >= 2) {
//       return "Email is not correct!";
//     }
//   }
//
//   if (req.test(email)) {
//     return "Email is correct!";
//   }
//
//   return "Email is not correct!";
// }
//
// console.log(ValidateEmail("my_mail@gmail.com"));
// console.log(ValidateEmail("#my_mail@gmail.com"));
// console.log(ValidateEmail("my_mail-@-gmail.com"));
// console.log(ValidateEmail("_"));
// console.log(ValidateEmail("-"));
