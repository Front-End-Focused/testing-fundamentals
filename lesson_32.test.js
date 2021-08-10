const {
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
} = require("./lesson_32");

// describe("posetive cases", () => {
  // test("lol", () => {
  //   expect(convertMinutestoSeconds(5)).toBe(300);
  //   expect(convertMinutestoSeconds(3)).toBe(180);
  //   expect(convertMinutestoSeconds(2)).toBe(120);
  // });
  // test("lol", () => {
  //   expect(getTheNextNumbOf(0)).toEqual(1);
  // });

  // test("lol", () => {
  //   expect(getFirstElementOfArg("first", "second", "third")).toBe("first");
  // });

  // test("lol", () => {
  //   expect(getSecondsInHour(2)).toBe(7200);
  // });

  // test("lol", () => {
  //   expect(getLastElement([1, 2, 3, 4, 5])).toBe(5);
  // });

  // test("lol", () => {
  //   expect(mergeArguments([1,2,3],true,false,null,'test')).toEqual([1,2,3,true,false,null,'test']);
  // });

  // test("lol", () => {
  //   expect(getAllBut([false,2,"1","4"],2)).toEqual([false,"1","4"]);
  // });

// });

// describe("TDD",()=>{
//   test("description", () => {
//     expect(getFullName({firstName: 'Larry', lastName: 'Fox'})).toEqual('Paul Dima');
//     expect(getFullName({firstName: 'Paul'})).toEqual('');
//     expect(getFullName({lastName: 'Fox'})).toEqual('');
//     expect(getFullName({firstName: 'Larry', lastName: 'Fox'})).toEqual('Paul Dima');
//     expect(getFullName(null)).toEqual('');
//   });

// test("description", ()=>{
//   expect(getFullName({firstName: 'Larry', lastName: 'Fox'})).toEqual('Paul Dima');

// })
// })

describe('TDD', () => {
  test('Возвращает новый массив объектов', () => {
      expect(AddContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'))
          .toEqual([{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }])
  });

});