const capitalize = require('./capitalize');

test('given a string "alfred" it returns "Alfred"', () => {
    expect(capitalize('alfred')).toBe('Alfred');
})