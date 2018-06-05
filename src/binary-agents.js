module.exports = function(str) {
  return str
    .split(' ')
    .map(function(binary) {
      return String.fromCharCode(parseInt(binary, 2));
    })
    .join('');
};
