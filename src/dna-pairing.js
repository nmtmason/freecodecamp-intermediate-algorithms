module.exports = function(str) {
  var basePairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
  return str.split('').map(function(code) {
    return [code, basePairs[code]];
  });
};
