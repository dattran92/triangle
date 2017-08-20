const assert = require('assert');
const triangle = require('../triangle');

describe('Triangle Type: ', () => {
  it('Not a valid triangle', () => {
    const type1 = triangle(0, 0, 0);
    const type2 = triangle(5, 1, 2);
    console.log('type1', type1);
    assert.equal(type1, 'error');
    assert.equal(type2, 'error');
  });

  it('Equilateral triangle', () => {
    const type = triangle(2, 2, 2);
    assert.equal(type, 'equilateral');
  });

  it('Scalene triangle', () => {
    const type = triangle(6, 8, 12);
    assert.equal(type, 'scalene');
  });

  it('isosceles', () => {
    const type1 = triangle(3, 3, 5);
    const type2 = triangle(3, 5, 3);
    const type3 = triangle(5, 3, 3);
    assert.equal(type1, 'isosceles');
    assert.equal(type2, 'isosceles');
    assert.equal(type3, 'isosceles');
  });
});
