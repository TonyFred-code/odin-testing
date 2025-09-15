const { default: expect } = require('expect');
const caesarCipher = require('./caesar-cipher');

it('can encrypt a non-empty string', () => {
  expect(caesarCipher('Hello World', 1)).toBe('Ifmmp Xpsme');
});

it('preserve symbols in given string', () => {
  expect(caesarCipher('!!!', 1)).toBe('!!!');
});

it('preserve string letter casing', () => {
  expect(caesarCipher('HELLO world', 1)).toBe('IFMMP xpsme');
});

it('wraps around alphabet', () => {
  expect(caesarCipher('za', 1)).toBe('ab');
});

it('returns empty string if given empty string', () => {
    expect(caesarCipher('', 1)).toBe('');
})

it('throws error when first parameter is not a string type', () => {
    expect(() => caesarCipher([1, 2, 3])).toThrowError('Invalid input. The input string must be a string')
})

it('throws error when second parameter is not a number type', () => {
    expect(() => caesarCipher('a', [1])).toThrowError('Invalid shift value. Key must be of type "number"')
})