module.exports = function(num) {
  var fibs = [];
  var previous = 0;
  var current = 1;
  while (current <= num) {
    fibs.push(current);
    current += previous;
    previous = current - previous;
  }
  return fibs
    .filter(function(fib) {
      return fib % 2 !== 0;
    })
    .reduce(function(sum, fib) {
      return sum + fib;
    });
};
