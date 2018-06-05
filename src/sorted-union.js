module.exports = function (arr) {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (collected, next) {
    var filtered = next.filter(function (element) {
      return collected.indexOf(element) === -1;
    });
    return collected.concat(filtered);
  }, []);
};
