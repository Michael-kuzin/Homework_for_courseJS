// 1 Task
// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x,y,,...z] = arr;
// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log(z); // [Bob]


// 2 Task

// let data = {
//   names: ["Sam", "Tom", "Ray", "Bob"],
//   ages: [20, 24, 22, 26],
// };
// let {
//   names: [, name2, , name4],
//   ages: [, age2, , age4],
// } = data;
// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26


// 3 Task
// function mul(...rest) {
//   let result = 1;
//   let multArr = [];
//
//   multArr = rest.filter((elm) => {
//     if (typeof elm === "number") {
//       return elm;
//     }
//   });
//
//   for (let i = 0; i < multArr.length; i++) {
//     result *= multArr[i];
//   }
//   if (multArr.length === 0) {
//     return 0;
//   }
//
//   return result;
// }
// console.log(mul(1, "str", 2, 3, true));
// console.log(mul(null, "str", false, true));


// 4 Task
// let server = {
//   data: 0,
//   convertToString: function (callback) {
//     callback(() => this.data + "");
//   },
// };
// let client = {
//   server: server,
//   result: "",
//   calc: function (data) {
//     this.server.data = data;
//     this.server.convertToString(this.notification());
//   },
//   notification: function () {
//     return (callback) => (this.result = callback());
//   },
// };
// client.calc(123);
// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"

// 5 Task
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
//
// function mapBuilder(keysArray, valuesArrays) {
//   const map = new Map();
//   for (let i = 0; i < keysArray.length; i++) {
//     map.set(keysArray[i], valuesArrays[i]);
//   }
//
//   return map;
// }
//
// let map2 = mapBuilder(keys, values);
// console.log(map2.size); // 4
// console.log(map2.get(2)); // "span"
