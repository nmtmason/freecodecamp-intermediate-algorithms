module.exports = function(str) {
  var pairs = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  var entities = new RegExp('[' + Object.keys(pairs).join('') + ']', 'g');
  return str.replace(entities, function(entity) {
    return pairs[entity];
  });
};
