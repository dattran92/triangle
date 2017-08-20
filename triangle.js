function checkValidTriangle(x, y, z) {
  if (x == null || y == null || z == null) {
    return false;
  }

  const sides = [ x, y, z];
  const sortedSides = sides.sort((a, b) => a - b > 0);

  if (sortedSides[0] + sortedSides[1] > sortedSides[2]) {
    return true;
  }

  return false;
}

module.exports = function(x, y, z) {
  if (!checkValidTriangle(x, y, z)) {
    return 'error';
  }

  if (x == y && y == z) {
    return 'equilateral';
  }

  if (x == z || y == z || x == y ) {
    return 'isosceles';
  }

  return 'scalene';
};
