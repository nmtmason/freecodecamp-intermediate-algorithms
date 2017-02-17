module.exports = function (collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && element[pre];
  });
};
