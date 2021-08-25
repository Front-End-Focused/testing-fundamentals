// /*
// 5 ➞ 300
// 3 ➞ 180
// 2 ➞ 120
// */
// const convertMinutestoSeconds = (minutes) =>
//   typeof minutes === "number" ? minutes * 60 : 0;

// /*
//  0 ➞ 1
//  9 ➞ 10
//  20 ➞ 21
//  */
// const getTheNextNumbOf = (n) => n + 1;

// /*
//  (1,2,3) ➞ 1
//  ({},[],null) ➞ {}
// */
// function getFirstElementOfArg() {
//   return arguments[0];
// }

// /*
//     2 ➞ 7200
//     10 ➞ 36000
//     24 ➞ 86400
// */
// const getSecondsInHour = (h) => h * 60 ** 2;

// /*
//  [1,2,3,4,5] ➞ 5
//  */
// const getLastElement = (arr) => arr[arr.length - 1];

// function mergeArguments(...args) {
//   return [...args.flat()];
// }

// /*
//  [false,'2',1], false ➞ false
//  */
// const getAllBut = (arr, target) => arr.filter((item) => item !== target);

// // TDD

// /*
// {firstName: 'Larry', lastName: 'Fox', age: 64, size: 176, weight: 5}
// {firstName: 'Larry', lastName: 'Fox', age: 64, size: '176cm', weight: '76kg'}
// */
// function transformData(obj) {
//   if (obj && obj.size && obj.weight) {
//     obj.size += "cm";
//     obj.weight += "kg";

//     return obj;
//   }

//   return "";
// }

// function getFullName(obj) {
//   if (obj && obj.firstName && obj.lastname) {
//     return `${obj.firstName} ${obj.lastname}`;
//   }
//   return "";
// }

module.exports = {
  // convertMinutestoSeconds,
  // getTheNextNumbOf,
  // getFirstElementOfArg,
  // getSecondsInHour,
  // getLastElement,
  // mergeArguments,
  // getAllBut,
  // transformData,
  // getFullName,
  addContinent,
  getTheLongestString,
  getSumOfElements,
};

// function oneAddUpTo(n) {
//   return (n * (n + 1)) / 2;
// }

// function twoAddUpTo(n) {
//   let total = 0;

//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }

//   return total;
// }

function addContinent(arr, elem) {
  if (!Array.isArray(arr)) return "";

  arr.map((foo) => (foo["continent"] = elem));

  return arr;
}

// addContinent(
//   [
//     { city: "Tokyo", country: "Japan" },
//     { city: "Bangkok", country: "Thailand" },
//   ],
//   "Asia"
// );

function getTheLongestString(arr) {
  let res = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > res.length) {
      res = arr[i];
    }
  }
  return res;
}

// getTheLongestString(["help", "me", "please"]);

function getSumOfElements(arr, num) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) res += arr[i];
  }
  return res;
}

// getSumOfElements([1, 2, 3, 4, 5, 6, 7, 8], 4);
