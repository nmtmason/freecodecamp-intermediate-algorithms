module.exports = function (collection, source) {
  var keys = Object.keys(source);

  return collection.filter(function (target) {
    return keys.every(function (key) {
      return target.hasOwnProperty(key) && source[key] === target[key];
    });
  });
};
