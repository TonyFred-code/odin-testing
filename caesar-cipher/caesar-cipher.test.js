const { default: expect } = require('expect');
const caesarCipher = require('./caesar-cipher');

it('can encrypt a non-empty string', () => {
  expect(caesarCipher('Hello World!', 1)).toBe('Ifmmp Xpsme!');
});
