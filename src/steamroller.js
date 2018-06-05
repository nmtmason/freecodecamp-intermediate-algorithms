var steamroller = (module.exports = function(arr) {
  return arr.reduce(function(merged, element) {
    if (Array.isArray(element)) {
      return merged.concat(steamroller(element));
    }
    return merged.concat(element);
  }, []);
});
