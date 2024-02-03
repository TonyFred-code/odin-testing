const capitalize = require('./capitalize');

test('given a string "alfred" it returns "Alfred"', () => {
    expect(capitalize('alfred')).toBe('Alfred');
})

test('given an empty string it returns the empty string', () => {
    expect(capitalize('')).toBe('');
})