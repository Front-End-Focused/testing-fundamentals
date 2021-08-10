const { convertMinutestoSeconds, getTheNextNumbOf, getFirstElementOfArg, getSecondsInHour, getLastElement, mergeArguments, getAllBut, transformData,
    getFullName, addContinent, getTheLongestString, sum } = require('./lesson_32')


describe('Positive cases', () => {

    test('Should return second properbly', () => {
        expect(convertMinutestoSeconds(5)).toBe(300)
        expect(convertMinutestoSeconds(3)).toBe(180)
        expect(convertMinutestoSeconds(2)).toBe(120)

    })

    test('Should return positive number', () => {
        expect(getTheNextNumbOf(0)).toEqual(1)
    })

    test('Should return first element', () => {
        expect(getFirstElementOfArg('first', 'second', 'third')).toBe('first')
    })

    test('Should return amount of second in hour', () => {
        expect(getSecondsInHour(2)).toBe(7200)
    })

    test('Should return last element in array', () => {
        expect(getLastElement([1, 2, 3, 4, 5])).toBe(5)
    })

    test('Should merge all given arg', () => {
        expect(mergeArguments([1, 2, 3], null, true)).toEqual([1, 2, 3, null, true])
    })

    test('Should return all but the executed target', () => {
        expect(getAllBut([false, 2, '1', '4'], 2)).toEqual([false, '1', '4'])
    })


})

describe('TDD', () => {
    test('Should return fullName', () => {
        expect(getFullName({ firstName: 'Paul', lastName: 'Dima' })).toEqual('Paul Dima')
        expect(getFullName({ firstName: 'Paul' })).toEqual('')
        expect(getFullName({ lastName: 'Dima' })).toEqual('')
        expect(getFullName({})).toEqual('')
        expect(getFullName(null)).toEqual('')
    })

    test('Should transform data', () => {
        expect(transformData({ firstName: 'Larry', lastName: 'Fox', age: 64, size: 176, weight: 5 })).toEqual({ firstName: 'Larry', lastName: 'Fox', age: 64, size: '176cm', weight: '5kg' })
        expect(transformData({ firstName: 'Larry', lastName: 'Fox', age: 64 })).toEqual('')
        expect(transformData({ age: 64, size: 176, weight: 5 })).toEqual('')
        expect(transformData(null)).toEqual('')
        expect(transformData({})).toEqual('')
    })

    test('Should add new field to the object in array', () => {
        expect(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')).toEqual([{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }])
        expect(addContinent([{ city: 'Tokyo', country: 'Japan' }, {}], 'Asia')).toEqual([{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { continent: 'Asia' }])
        expect(addContinent([{ city: 'Tokyo' }, null], 'Asia')).toEqual([{ city: 'Tokyo', continent: 'Asia' }, null])
        expect(addContinent([{ city: 'Tokyo', country: 'Japan' }, undefined, true, 15, 'str'], 'Asia')).toEqual([{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, undefined, true, 15, 'str'])
        expect(addContinent([], 'Asia')).toEqual([])
        expect(addContinent([{ city: 'Tokyo', country: 'Japan' }], 15)).toEqual([{ city: 'Tokyo', country: 'Japan' }])

    })

    test('Should return longest string', () => {
        expect(getTheLongestString(['help', 'me'])).toEqual('help')
        expect(getTheLongestString(['I', 'need', 'candy'])).toEqual('candy')
        expect(getTheLongestString(['I', 'need', false, 1, null, {}, 'candy'])).toEqual('candy')
        expect(getTheLongestString([15, false, 1, null, {}, []])).toEqual('')
        expect(getTheLongestString([])).toEqual('')
    })

    test('Should return sum of numbers', () => {
        expect(sum([1, 2, 3, 4, 5, 6, 7], 2)).toEqual(25)
        expect(sum([-10, -11, -3, 1, -4], -3)).toEqual(1)
        expect(sum([78, 99, 100, 101, 401], 99)).toEqual(602)
        expect(sum([6, 0, -10, 'str', true, null, 8, {}, []], 5)).toEqual(14)
        expect(sum([], 3)).toEqual(0)
        expect(sum([1, 2, 3, 4], '')).toEqual(0)
        expect(sum([1, 2, 3, 4], { name: 'Vika' })).toEqual(0)

    })
})
