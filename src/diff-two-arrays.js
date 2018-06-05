module.exports = function(arr1, arr2) {
  return arr1.concat(arr2).filter(function(x) {
    return arr1.indexOf(x) === -1 || arr2.indexOf(x) === -1;
  });
};
