export default function within (child, parent) {
  let node = child;

  while (node) {
    if (node == parent) return true;
    node = node.parentNode
  }

  return false;
};
