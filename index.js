const triangle = require('./triangle');

const args = process.argv.slice(2).map(x => parseInt(x));
const type = triangle(args[0], args[1], args[2]);

console.log(`Your triangle is: ${type}`);
