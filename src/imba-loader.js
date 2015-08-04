var compiler = require('imba/lib/compiler');

module.exports = function(content) {
  return compiler.compile(content);
}

