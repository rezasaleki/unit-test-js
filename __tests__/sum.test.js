const sum = require('../sum');

// Test Reference: https://jestjs.io/

test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3);
});