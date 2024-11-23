const timeToWords = require('./timeword'); // Adjust the path based on your project structure

describe('timeToWords', () => {
  test('should return "midnight" for 00:00', () => {
    expect(timeToWords('00:00')).toBe('midnight');
  });

  test('should return "noon" for 12:00', () => {
    expect(timeToWords('12:00')).toBe('noon');
  });

  test('should return correct time for morning hours (AM)', () => {
    expect(timeToWords('01:00')).toBe('one o’clock am');
    expect(timeToWords('02:15')).toBe('two fifteen am');
    expect(timeToWords('11:59')).toBe('eleven fifty nine am');
  });

  test('should return correct time for afternoon hours (PM)', () => {
    expect(timeToWords('12:30')).toBe('twelve thirty pm');
    expect(timeToWords('13:45')).toBe('one forty five pm');
    expect(timeToWords('23:59')).toBe('eleven fifty nine pm');
  });

  test('should handle leading zeros in minutes', () => {
    expect(timeToWords('03:01')).toBe('three oh one am');
    expect(timeToWords('15:09')).toBe('three oh nine pm');
  });

  test('should handle edge times at AM/PM boundaries', () => {
    expect(timeToWords('11:59')).toBe('eleven fifty nine am');
    expect(timeToWords('12:00')).toBe('noon');
    expect(timeToWords('23:59')).toBe('eleven fifty nine pm');
    expect(timeToWords('00:00')).toBe('midnight');
  });

  test('should handle full hour times correctly', () => {
    expect(timeToWords('04:00')).toBe('four o’clock am');
    expect(timeToWords('16:00')).toBe('four o’clock pm');
  });

  test('should handle various random times correctly', () => {
    expect(timeToWords('05:34')).toBe('five thirty four am');
    expect(timeToWords('18:15')).toBe('six fifteen pm');
    expect(timeToWords('07:07')).toBe('seven oh seven am');
  });

  test('should throw an error for invalid input', () => {
    expect(() => timeToWords('25:00')).toThrow();
    expect(() => timeToWords('12:60')).toThrow();
    expect(() => timeToWords('')).toThrow();
    expect(() => timeToWords('abc')).toThrow();
  });
});
