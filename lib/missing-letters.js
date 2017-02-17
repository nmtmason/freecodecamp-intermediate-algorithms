module.exports = function (str) {
  for (var i = 0; i < str.length; i++) {
    var current = str.charCodeAt(i);
    var expected = str.charCodeAt(0) + i;
    if (current !== expected) {
      return String.fromCharCode(expected);
    }
  }
  return undefined;
};
