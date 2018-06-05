module.exports = function(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(item => ({
    name: item.name,
    orbitalPeriod: Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    )
  }));
};
