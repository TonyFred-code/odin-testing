const calculate = require('./calculate');

test('use add method to return 1 + 1 to be 2', () => {
    expect(calculate.add(1, 1)).toBe(2);
})

test('use subtract method to return 1 - 1 to be 0', () => {
    expect(calculate.subtract(1, 1)).toBe(0);
})

test('use multiply method to return 2 * 2 to be 4', () => {
    expect(calculate.multiply(2, 2)).toBe(4);
})

test('use divide method to return 10 / 5 to be 2', () => {
    expect(calculate.divide(10, 5)).toBe(2);
})

test('use divide method to return 10 / 0 to be "ERROR"', () => {
    expect(calculate.divide(10, 0)).toBe("ERROR");
})
