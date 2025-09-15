const capitalize = require('./capitalize');

it('given a string "alfred" it returns "Alfred"', () => {
    expect(capitalize('alfred')).toBe('Alfred');
})

it('given an empty string it returns the empty string', () => {
    expect(capitalize('')).toBe('');
})