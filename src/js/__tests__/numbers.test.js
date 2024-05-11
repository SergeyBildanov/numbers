import numberChanger from '../numbers';

test.each(
  [
    ["8 (927) 000 00 00", "+79270000000"],
    ["+7 960 000 00 00", "+79600000000"],
    ["+86 000 000 0000", "+860000000000"],
  ])("testing validation fucn for %s", (number, expected)=>{
    const result = numberChanger(number);
    expect(result).toEqual(expected);
  });

