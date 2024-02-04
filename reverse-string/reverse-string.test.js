const reverseString = require('./reverse-string');

it('given "abc" it returns "cba"', () => {
  expect(reverseString('abc')).toBe('cba');
});
