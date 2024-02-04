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
