const { transformData, AddContinent, getTheLongestString, sum } = require('./lesson_32')


// describe('Positive cases', () => {
//     test('Should return second properbly', () => {
//         expect(convertMinutestoSeconds(5)).toBe(300)
//     });

//     test('Should return positive number', () => {
//         expect(getTheNextNumbOf(0)).toEqual(1)
//     });
    
//     test('Should return first element of given arguments', () => {
//         expect(getFirstElementOfArg('first', 'secont', 'third')).toBe('first')
//         expect(getFirstElementOfArg({}, [], null)).toEqual({})
//     });
    
//     test('Should return amount of seconds in hour', () => {
//         expect(getSecondsInHour(2)).toBe(7200)
//     });
    
//     test('Should return last element', () => {
//         expect(getLastElement([1, 2, 3, 4, 5])).toBe(5)
//     });
    
//     test('Should return all given agr', () => {
//         expect(mergeArguments([1, 2, 3], false, true, 'test')).toEqual([1, 2, 3, false, true, 'test'])
//     });

//     test('Should return all but execluded target ', () => {
//         expect(getAllBut([false, 1, 'string'], 1)).toEqual([false, 'string'])
//     });


// })

// describe('TDD', () => {
//     test('shoul transform user data', () => {
//         // console.log(transformData({ firstName: 'Larry', lastName: 'Fox', age: 64, size: 176, weight: 5 })).toEqual({ firstName: 'Larry', lastName: 'Fox', age: 64, size: '176cm', weight: '76kg' })
//         expect(transformData({firstName: 'Larry', lastName: 'Fox', age: 64, size: 176, weight: 76})).toEqual({firstName: 'Larry', lastName: 'Fox', age: 64, size: '176cm', weight: '76kg'})
//         // })
//     })
// })



///Home WORK
describe('TDD', () => {
    test('Should transform add continent', () => {
        expect(AddContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'))
            .toEqual([{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }])
        expect(AddContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'))
            .toEqual([{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }])
        expect(AddContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }]))
            .toEqual('')
    });
    test('Should return max length of word', () => {
        expect(getTheLongestString(['help', 'me']))
            .toEqual('help')
        expect(getTheLongestString(['I', 'need', 'candy']))
            .toEqual('candy')
    });
    test('Should return sum numbers from array', () => {
        expect(sum([1, 2, 3, 4, 5, 6, 7], 2)).toEqual(25);
        expect(sum([-10, -11, -3, 1, -4], -3)).toEqual(1);
        expect(sum([78, 99, 100, 101, 401], 99)).toEqual(602);
    });
});

