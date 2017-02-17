module.exports = function (num) {
  function createRange (min, max) {
    var range = [];
    for (var i = min; i <= max; i++) {
      range.push(i);
    }
    return range;
  }

  function isPrime (num) {
    if (num <= 1) {
      return false;
    }
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  var range = createRange(0, num);
  return range.reduce(function (sum, x) {
    return isPrime(x) ? sum + x : sum;
  }, 0);
};
