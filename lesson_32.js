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
    if (obj && obj.size && obj.weight && obj.firstName && obj.lastName && obj.age) {
        obj.size += "cm";
        obj.weight += "kg";
        return obj;
    }
    return '';
}


function getFullName(obj) {
    if (obj && 'firstName' in obj && obj.hasOwnProperty('lastName')) {
        return `${obj.firstName} ${obj.lastName}`
    }
    return ""
}

function addContinent(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object' && typeof str === 'string' && arr[i] != null) {
            arr[i].continent = str;
        }
    }
    return arr
}

function getTheLongestString(arr) {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string' && arr[i].length > res.length) {
            res = arr[i]
        }
    }
    return res
}

function sum(arr, num) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && typeof num === 'number' && arr[i] > num) {
            sum += arr[i]
        }
    }
    return sum
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
    addContinent,
    getTheLongestString,
    sum,
}