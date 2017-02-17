module.exports = function (str, before, after) {
  var re = new RegExp(before, 'g');
  return str.replace(re, function (match) {
    return /[A-Z]/.test(match.charAt(0)) ? after.charAt(0).toUpperCase() + after.slice(1) : after;
  });
};
