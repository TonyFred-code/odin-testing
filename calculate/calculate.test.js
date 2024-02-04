const calculate = require('./calculate');

it('use add method to return 1 + 1 to be 2', () => {
    expect(calculate.add(1, 1)).toBe(2);
})

it('use subtract method to return 1 - 1 to be 0', () => {
    expect(calculate.subtract(1, 1)).toBe(0);
})

it('use multiply method to return 2 * 2 to be 4', () => {
    expect(calculate.multiply(2, 2)).toBe(4);
})

it('use divide method to return 10 / 5 to be 2', () => {
    expect(calculate.divide(10, 5)).toBe(2);
})

it('use divide method to return 10 / 0 to be "ERROR"', () => {
    expect(calculate.divide(10, 0)).toBe("ERROR");
})
