const {convertMinutestoSeconds, sum, getTheLongestString, AddContinent, transformData, getFullName, getTheNextNumbOf,getLastElement, getAllBut, mergeArguments, getFirstElementOfArg, getSecondsInHour} = require('./lesson_32')

describe('positive cases', () => {

    test('should return', () => {
        expect(convertMinutestoSeconds(5)).not.toBe(200);
        expect(convertMinutestoSeconds(1)).toBe(60);
        expect(convertMinutestoSeconds(2)).toBe(120);
        expect(convertMinutestoSeconds(3)).toBe(180);
        expect(convertMinutestoSeconds(0)).toBe(0);
    })


    test('should return next number', () =>{
        expect(getTheNextNumbOf(0)).toEqual(1);
        expect(getTheNextNumbOf(1)).toEqual(2);
        expect(getTheNextNumbOf(2)).toEqual(3);
        expect(getTheNextNumbOf(3)).toEqual(4);
        expect(getTheNextNumbOf(4)).toEqual(5);
        expect(getTheNextNumbOf(5)).toEqual(6);

    })
    test('Should returns the first elements of given arg', () => {
        expect(getFirstElementOfArg('first', 'second', 'third')).toEqual('first')
        expect(getFirstElementOfArg({}, [], null)).toEqual({})
    })
    test ('Should return seconds in hour', () => {
        expect(getSecondsInHour(1)).toEqual(3600)
        expect(getSecondsInHour(10)).toEqual(36000)
    })

    test('should return last elem of array', () => {
        expect(getLastElement([1,2,3,4,5,6])).toEqual(6);
    })

    test ('Should merge Arg', () => {
        expect(mergeArguments(1,2,3,"akjsdh", true, [5,67])).toEqual([1,2,3,"akjsdh",true,5,67]);
    })

    test('get All but', () => {
        expect(getAllBut([1,2,3,4,1], 1)).toEqual([2,3,4]);
    })

    // test('should transform data  size + cm weight + kg',() => {
    //   expect(transformData({firstName: 'Larry', lastName: 'Fox', age: 64, size: 176, weight: 76})).toEqual({firstName: 'Larry', lastName: 'Fox', age: 64, size: '176cm', weight: '76kg'})
    // })
})

describe('TDD', () => {
    test('Should return fullname', () => {
        expect(getFullName({firstname: 'Stas', lastname: 'Babitsky'})).toEqual('Stas Babitsky');
        expect(getFullName({firstname: 'Stas'})).toEqual('');
        expect(getFullName({lastname: 'Babitsky'})).toEqual('');
        expect(getFullName({})).toEqual('');
        expect(getFullName(null)).toEqual('');
    })

    test ('should return transformed data', () => {
        expect(transformData({firstName: 'Larry', lastName: 'Fox', age: 64, size: 176, weight: 76})).toEqual({firstName: 'Larry', lastName: 'Fox', age: 64, size: '176cm', weight: '76kg'})
        expect(transformData({firstName: 'Larry', lastName: 'Fox', age: 64, weight: 76})).toEqual({firstName: 'Larry', lastName: 'Fox', age: 64,  weight: '76kg'})
        expect(transformData({firstName: 'Larry', lastName: 'Fox', age: 64, size: 176, })).toEqual({firstName: 'Larry', lastName: 'Fox', age: 64, size: '176cm'})
        expect(transformData({firstName: 'Larry', lastName: 'Fox', age: 64})).toEqual({firstName: 'Larry', lastName: 'Fox', age: 64})
        expect(transformData({})).toEqual({})
        expect(transformData(null)).toEqual(null)

    })
    // expect(getFullName({}))
    // expect(transformData({firstName: 'Larry', lastName: 'Fox', age: 64, size: 176, weight: 76})).toEqual({firstName: 'Larry', lastName: 'Fox', age: 64, size: '176cm', weight: '76kg'})
})

describe ('TDD homework', () =>{
    test('should return objeect',() =>{
        expect(AddContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')).toEqual( [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]);
        expect(AddContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')).toEqual( [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]);
    })

    test( 'Should return the largest string', () =>{
        expect(getTheLongestString(['help', 'me'])).toEqual('help');
        expect(getTheLongestString(['I','need', 'me'])).toEqual('need');
        expect(getTheLongestString(['123456789','12345678', '1234567890'])).toEqual('1234567890');
    })

    test ('Should return sum of elem that bigget then min num', () =>{
        expect(sum([1, 2, 3, 4, 5, 6, 7], 2)).toEqual(25)
        expect(sum([-10, -11, -3, 1, -4], -3, 2)).toEqual(1)
        expect(sum([78, 99, 100, 101, 401], 99, 2)).toEqual(602)
    })
})