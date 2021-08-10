
const { convertMinutestoSeconds, getTheNextNumbOf, getFirstElementOfArg, getSecondsInHour, getLastElement, mergeArguments, getAllBut, getFullName, transformData, AddContinent, getTheLongestString, sum } = require('./lesson_32')

describe('Positive cases', () => {
    test('Shoud return second properbly', () => {
        expect(convertMinutestoSeconds(5)).toBe(300)
        expect(convertMinutestoSeconds(3)).toBe(180)
        expect(convertMinutestoSeconds(2)).toBe(120)
    })

    test('Should return positive number', () => {
        expect(getTheNextNumbOf(0)).toEqual(1)
    })
    test('Should return first element of given arguments', () => {
        expect(getFirstElementOfArg('first', 'second', 'third')).toBe('first')
    })
    test('Should return amount of second in hour', () => {
        expect(getSecondsInHour(2)).toBe(7200)
    })
    test('Should return last element in array', () => {
        expect(getLastElement([1, 2, 3, 4, 5])).toBe(5)
    })
    test('Should merge all given arguments', () => {
        expect(mergeArguments([1, 2, 3], null, true)).toEqual([1, 2, 3, null, true])
    })
    test('should return all but the executed target', () => {
        expect(getAllBut([false, 2, '1', '4'], 2)).toEqual([false, '1', '4'])
    })

})
describe('TDD', () => {
    test('should return full name', () => {
        expect(getFullName({ firstName: 'paul', lastName: 'Dima' })).toEqual('paul Dima')
        expect(getFullName({ firstName: 'paul' })).toEqual('')
        expect(getFullName({ lastName: 'Dima' })).toEqual('')
        expect(getFullName({})).toEqual('')
        expect(getFullName(null)).toEqual('')
    })
    test('Should transform user data', () => {
        expect(transformData({ firstName: 'Larry', lastName: 'Fox', age: 64, size: 176, weight: 76 })).toEqual({ firstName: 'Larry', lastName: 'Fox', age: 64, size: '176cm', weight: '76kg' })
        expect(transformData({ firstName: 'Larry', lastName: 'Fox', age: 64, })).toEqual('')
        expect(transformData({ firstName: 'Larry', lastName: 'Fox', })).toEqual('')
        expect(transformData({})).toEqual('')
        expect(transformData(null)).toEqual('')
    })
    test('should add continent', () => {
        expect(AddContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')).toEqual([{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }])
        expect(AddContinent([{ city: 'Tokyo' }, { city: 'Bangkok' }], 'Asia')).toEqual([{ city: 'Tokyo', continent: 'Asia' }, { city: 'Bangkok', continent: 'Asia' }])
        expect(AddContinent([{ city: 'Tokyo', continent: 'Asia' }, { city: 'Bangkok', continent: 'Asia' }], 'Asia')).toEqual([{ city: 'Tokyo', continent: 'Asia' }, { city: 'Bangkok', continent: 'Asia' }])
        expect(AddContinent([], 'Asia')).toEqual([])
        expect(AddContinent(null, 'Asia')).toEqual(null)
    })
    test('should return longest string', () => {
        expect(getTheLongestString(['help', 'me'])).toEqual('help')
        expect(getTheLongestString(['help', 100000])).toEqual('help')
        expect(getTheLongestString([true, 'me', 100000])).toEqual('me')
    })
    test('should return sum', () => {
        expect(sum([1, 2, 3, 4, 5, 6, 7], 2)).toEqual(25)
        expect(sum([-10, -11, -3, true, 1, -4], -3)).toEqual(1)
        expect(sum([78, 99, 100, 'string', true, 101, 401], 'string')).toEqual(0)

    })
})