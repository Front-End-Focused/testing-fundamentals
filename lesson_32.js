/*
5 ➞ 300
3 ➞ 180
2 ➞ 120
*/
const convertMinutestoSeconds = (minutes) => typeof minutes === 'number' ? minutes * 60 : 0;

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
    return arguments[0]
}

/*
    2 ➞ 7200
    10 ➞ 36000
    24 ➞ 86400
*/
const getSecondsInHour = (h) => h * (60 ** 2)

/*
 [1,2,3,4,5] ➞ 5
 */
const getLastElement = (arr) => arr[arr.length - 1]


function mergeArguments(...args) {
    return [...args.flat()]
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
function transformData(obj) {
    if (obj && obj.size && obj.weight) {
        obj.size = `${obj.size}cm`
        obj.weight = `${obj.weight}kg`
    }
    return obj
}

function getFullName(obj) {
    let str = ''
    if (obj&&obj.firstName && obj.lastName) {
        str = `${obj.firstName} ${obj.lastName} `
    }
    return str
}


///HOME WORK
// AddContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia') -->
// [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

// AddContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe') -->
// [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]


function AddContinent(arr, str) {
    if(!str){
          return ''
    }
    arr.map(item=>item['continent']=str)
    return arr
};

function getTheLongestString(arr){
    return arr.sort((a, b) => b.length - a.length)[0]
}
   
function sum(arr, num){
    return arr.filter(item => item > num).reduce((a, b) => a + b)
   }

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
    sum
}