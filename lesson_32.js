/*
5 ➞ 300
3 ➞ 180
2 ➞ 120
*/
const convertMinutestoSeconds = (minutes) =>
  typeof minutes === "number" ? minutes * 60 : 0;

/*
 0 ➞ 1
 9 ➞ 10
 20 ➞ 21
 */
const getTheNextNumbOf = (n) => n + 1;
/*
 (1,2,3) ➞ 1
 ({},[],null) ➞ {}
*/
function getFirstElementOfArg() {
  return arguments[0];
}

/*
    2 ➞ 7200
    10 ➞ 36000
    24 ➞ 86400
*/
const getSecondsInHour = (h) => h * 60 ** 2;

/*
 [1,2,3,4,5] ➞ 5
 */
const getLastElement = (arr) => arr[arr.length - 1];

function mergeArguments(...args) {
  return [...args.flat()];
}

/*
 [false,'2',1], false ➞ false
 */
const getAllBut = (arr, target) => arr.filter((item) => item !== target);

// TDD

/* 
{firstName: 'Larry', lastName: 'Fox', age: 64, size: 176, weight: 5} 
{firstName: 'Larry', lastName: 'Fox', age: 64, size: '176cm', weight: '76kg'}
*/
function transformData(){
}



function getFullName(input) {
  if(input && input.firstName && input.lastName){
        return `${input.firstName} ${input.lastName}`
    }
}

getFullName({firstName: 'Larry', lastName: 'Fox', age: 64, size: 176, weight: 5})

function AddContinent(input,str){
  for (let i = 0; i <= input.length -1; i++) {
      input[i]["continent"] = str
    }
    console.log(input);
    return input
}

// AddContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')

function getTheLongestString(arr){
    let clone = []
    for (let i = 0; i <= arr.length - 1; i++) {
      clone.push(arr[i].length)
    }
    clone.sort(function(a,b) {
      return a - b
      
    })
    console.log();
    return clone[clone.length- 1]
}

getTheLongestString(['help', 'me','Oleja'])



// [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]


module.exports = {
  convertMinutestoSeconds,
  getTheNextNumbOf,
  getFirstElementOfArg,
  getSecondsInHour,
  getLastElement,
  mergeArguments,
  getAllBut,
  transformData,
  getFullName,
  AddContinent,
  getTheLongestString,
};
