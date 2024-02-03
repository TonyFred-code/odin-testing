const reverseString = require('./reverse-string');

test('given "abc" it returns "cba"', () => {
  expect(reverseString('abc')).toBe('cba');
});
