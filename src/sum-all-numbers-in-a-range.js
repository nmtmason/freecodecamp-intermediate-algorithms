module.exports = function(arr) {
  var sum = 0;
  for (var i = Math.min.apply(null, arr); i <= Math.max.apply(null, arr); i++) {
    sum += i;
  }
  return sum;
};
