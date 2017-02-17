module.exports = function (str) {
  var whitespace = /[ _-]/g;
  var titlecase = /[a-z][A-Z]/g;

  return str.replace(whitespace, '-').replace(titlecase, function (match) {
    return match.charAt(0) + '-' + match.charAt(1);
  }).toLowerCase();
};
