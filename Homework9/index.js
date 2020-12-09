// 1 завдання
// jQuery(document).ready(function ($) {
//   if($('a[href^="https://"]')) {
//     $(a).attr('target','_blank')
//  }
// });


// 2 завдання

// jQuery(document).ready(function ($) {
//   let head = $(".head");
//   head.css("background", "green");
//   let inner = head.find(".inner");
//   inner.css("font-size", "35px");
// });


// 3 завдання

// let arr = $( "div" )
// let arr2 = $( "h3" )
//
// for (let i = 0; i < arr.length; i++) {
//    $( arr2[i] ).before($( arr[i] ))
// }

// 4 завдання

// $(document).ready(function() {
//   let inp = $("INPUT")
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
// });
