const timeToWords = require('./timeToWords');

// Array of test cases with the input time and expected output in words
const testCases = [
  ['00:00', 'midnight'],
  ['12:00', 'noon'],
  ['01:00', 'one o’clock am'],
  ['06:01', 'six oh one am'],
  ['09:30', 'nine thirty am'],
  ['10:45', 'ten forty five am'],
  ['11:59', 'eleven fifty nine am'],
  ['12:30', 'twelve thirty pm'],
  ['14:15', 'two fifteen pm'],
  ['18:05', 'six oh five pm'],
  ['20:20', 'eight twenty pm'],
  ['23:59', 'eleven fifty nine pm']
];

// Unit test for timeToWords
describe('timeToWords', () => {

  // Iterate through each test case
  testCases.forEach(([input, expectedOutput]) => {
    it(`should convert ${input} to "${expectedOutput}"`, () => {
      // Compare the actual output to the expected output
      expect(timeToWords(input)).toBe(expectedOutput);
    });
  });

  // Add additional boundary tests for edge cases
  it('should handle invalid times', () => {
    expect(() => timeToWords('25:00')).toThrow();  // Invalid hour
    expect(() => timeToWords('13:60')).toThrow();  // Invalid minute
    expect(() => timeToWords('random')).toThrow(); // Invalid input
  });

  it('should handle times without leading zeros correctly', () => {
    expect(timeToWords('9:30')).toBe('nine thirty am'); // Missing leading zero in hour
    expect(timeToWords('7:05')).toBe('seven oh five am');
  });

  it('should handle times in single hour format correctly', () => {
    expect(timeToWords('1:30')).toBe('one thirty am'); // 1:30 am without leading zero
    expect(timeToWords('2:15')).toBe('two fifteen am');
  });

  it('should return "noon" and "midnight" for 12:00 and 00:00', () => {
    expect(timeToWords('12:00')).toBe('noon');       // 12:00 pm as noon
    expect(timeToWords('00:00')).toBe('midnight');   // 00:00 as midnight
  });
});