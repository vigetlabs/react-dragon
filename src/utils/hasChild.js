module.exports = function within (child, parent) {
  var node = child;

  while (node = node.parentNode) {
    if (node == parent) return true;
  }

  return false;
};
