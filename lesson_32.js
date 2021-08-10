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
 if(obj ){
     if('size' in obj) obj.size+='cm';
     if( 'weight' in obj) obj.weight+='kg';
 }
 return obj;
}

function getFullName(arg) {
    // if (arg === null) return '';
    if(arg && arg.firstname && arg.lastname){
        return `${arg.firstname} ${arg.lastname}`
    }else return '';
}

// module.exports = {
//     convertMinutestoSeconds,
//     getTheNextNumbOf,
//     getFirstElementOfArg,
//     getSecondsInHour,
//     getLastElement,
//     mergeArguments,
//     getAllBut,
//     transformData,
//     getFullName,
//     AddContinent
// }
/*
* Напишите функцию, которая принимает массив объектов и строку в качестве аргументов
* Добавьте свойство с ключом "континент" и значением, равным строке, к каждому из объектов
* Возвращает новый массив объектов
* p.s. старайтесь не изменять исходный массив
*/
// примеры:

//     AddContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia') -->
//     [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
//
// AddContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe') -->
// [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]
//
// ---

function AddContinent(arrayOfObj, continent){
    for( let elem of arrayOfObj){
        elem.continent = continent;
    }
    return arrayOfObj;
}

    /*
     * Напишите функцию, которая принимает массив строк в качестве аргумента
     * Возвращает самую длинную строку
    */
//     getTheLongestString(['help', 'me']) --> 'help'
// getTheLongestString(['I', 'need', 'candy']) --> 'candy'

//---
  function getTheLongestString(arrayOfString){
      let longestString = arrayOfString[0]
      for (let str of arrayOfString){
          if(longestString.length < str.length) longestString = str;
      }
      return longestString;
}
    /*
     * Напишите функцию, которая принимает массив из числ, скажем num, в качестве аргументов
     * Суммируйте все элементы массива со значением больше num
     * Верните сумму
    */
//     sum([1, 2, 3, 4, 5, 6, 7], 2) --> 25
// sum([-10, -11, -3, 1, -4], -3) --> 1
// sum([78, 99, 100, 101, 401], 99) --> 602

function sum(arrayOfNum, minNum){
    let sum = 0;
    for (let el of arrayOfNum){
        if(el > minNum) sum+=el;
    }
    return sum;
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