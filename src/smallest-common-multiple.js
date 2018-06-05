module.exports = function(arr) {
  function createRange(min, max) {
    var range = [];
    for (var i = min; i <= max; i++) {
      range.push(i);
    }
    return range;
  }

  function gcd(x, y) {
    if (y === 0) {
      return x;
    }
    return gcd(y, x % y);
  }

  var range = createRange(Math.min.apply(null, arr), Math.max.apply(null, arr));
  var lcm = range[0]; // 1
  for (var i = 1; i < range.length; i++) {
    lcm = (lcm * range[i]) / gcd(lcm, range[i]);
  }
  return lcm;
};
