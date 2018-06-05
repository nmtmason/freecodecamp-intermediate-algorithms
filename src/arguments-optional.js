module.exports = function addTogether() {
  var args = Array.prototype.slice.call(arguments);
  if (
    args.some(function(x) {
      return !Number.isInteger(x);
    })
  ) {
    return undefined;
  }
  if (args.length === 1) {
    return function(x) {
      return addTogether(args[0], x);
    };
  }
  return args.reduce(function(sum, x) {
    return sum + x;
  }, 0);
};
