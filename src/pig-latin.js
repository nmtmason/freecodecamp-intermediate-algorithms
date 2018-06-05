module.exports = function(str) {
  var consonants = /^[b-df-hj-np-tv-z]+/;

  return str
    .split(' ')
    .map(function(word) {
      var matches = consonants.exec(word);
      return matches
        ? word.slice(matches[0].length) + matches[0] + 'ay'
        : word + 'way';
    })
    .join(' ');
};
