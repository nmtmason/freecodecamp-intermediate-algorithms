module.exports = function(arr) {
  var args = Array.prototype.slice.call(arguments);
  return arr.filter(function(x) {
    return args.indexOf(x) === -1;
  });
};
