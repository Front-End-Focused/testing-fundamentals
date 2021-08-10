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
function transformData(input) {
    if (input && input.firstName && input.lastName && input.age && input.size && input.weight) {
        input.size += 'cm';
        input.weight += 'kg';
        return input;
    }
    return ''
}

function getFullName(input) {
    if (input && 'firstName' in input && input.hasOwnProperty('lastName')) {
        return `${input.firstName} ${input.lastName}`

    }
    return ''
}

function AddContinent(array, str) {
    if (array != null) {
        for (let i = 0; i < array.length; i++) {
            array[i].continent = str
        }
    }
    return array
}

function getTheLongestString(array) {
    res = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > res.length && typeof array[i] == 'string') {
            res = array[i]
        }

    }
    return res
}

function sum(array, num) {
    res = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num && typeof array[i] == 'number' && typeof num == 'number') {
            res += array[i]
        }
    }
    return res
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
    sum,
}
