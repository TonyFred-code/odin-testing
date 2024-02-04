const { default: expect } = require('expect');
const analyzeArray = require('./analyze-array');

it('gives analysis of a non-empty array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

it('gives analysis of a non-empty array', () => {
    expect(analyzeArray([1, 9, -1, 4, 5, 6])).toEqual({
      average: 4,
      min: -1,
      max: 9,
      length: 6,
    });
  });