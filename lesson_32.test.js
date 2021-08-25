const {
  // convertMinutestoSeconds,
  // getFirstElementOfArg,
  // getTheNextNumbOf,
  // getSecondsInHour,
  // getLastElement,
  // mergeArguments,
  // getAllBut,
  // transformData,
  // getFullName,
  addContinent,
  getTheLongestString,
  getSumOfElements,
} = require("./lesson_32");

// describe("Positive cases", () => {
//   test("should return seconds properbly", () => {
//     expect(convertMinutestoSeconds(5)).toBe(300);
//     expect(convertMinutestoSeconds(3)).toBe(180);
//     expect(convertMinutestoSeconds(2)).toBe(120);
//   });

//   test("should return positive number", () => {
//     expect(getTheNextNumbOf(5)).toEqual(6);
//   });

//   test("should return first element of argument", () => {
//     expect(getFirstElementOfArg(1, 2, 3, 4)).toEqual(1);
//   });

//   test("should return amount of second in hour", () => {
//     expect(getSecondsInHour(2)).toBe(7200);
//     expect(getSecondsInHour(10)).toBe(36000);
//   });

//   test("should return last element of argument", () => {
//     expect(getLastElement([1, 2, 3, 4, 5])).toBe(5);
//   });

//   test("should return merge arguments", () => {
//     expect(mergeArguments([false], 1, "string")).toEqual([false, 1, "string"]);
//   });

//   test("should return all but the execluded target", () => {
//     expect(getAllBut([true, 1, "2", "3", 4], 1)).toEqual([true, "2", "3", 4]);
//   });
// });

// describe("TDD", () => {
//   test("should return fullname", () => {
//     expect(getFullName({ firstName: "Andrey", lastname: "Pashkov" })).toEqual(
//       "Andrey Pashkov"
//     );

//     expect(getFullName({ firstName: "Andrey" })).toContain("");

//     expect(getFullName({ lastname: "Pashkov" })).toContain("");
//     expect(getFullName({})).toContain("");
//     expect(getFullName(null)).toContain("");
//   });

//   test("should return transform data", () => {
//     expect(
//       transformData({
//         firstName: "Larry",
//         lastName: "Fox",
//         age: 64,
//         size: 176,
//         weight: 5,
//       })
//     ).toEqual({
//       firstName: "Larry",
//       lastName: "Fox",
//       age: 64,
//       size: "176cm",
//       weight: "5kg",
//     });

//     expect(
//       transformData({ firstName: "Larry", lastName: "Fox", age: 64, size: 176 })
//     ).toContain("");
//   });

//   expect(
//     transformData({ firstName: "Larry", lastName: "Fox", age: 64, weight: 5 })
//   ).toEqual("");
// });

describe("Home Work", () => {
  test("should return massive", () => {
    expect(
      addContinent(
        [
          { city: "Tokyo", country: "Japan" },
          { city: "Bangkok", country: "Thailand" },
        ],
        "Asia"
      )
    ).toEqual([
      { city: "Tokyo", country: "Japan", continent: "Asia" },
      { city: "Bangkok", country: "Thailand", continent: "Asia" },
    ]);
  });

  test("should return longest string", () => {
    expect(getTheLongestString(["I", "need", "candy"])).toEqual("candy");

    expect(getTheLongestString(["help", "me", "please"])).toEqual("please");
  });

  test("should return sum of elements", () => {
    expect(getSumOfElements([1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual(26);

    expect(getSumOfElements([1, 2, 3, 4, 5, 6, 7, 8], 1)).toEqual(35);

    expect(getSumOfElements([1, 2, 3, 4, 5, 6, 7, 8], 8)).toEqual(0);
  });
});
