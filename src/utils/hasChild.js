export default function within (child, parent) {
  let node = child;

  while (node = node.parentNode) {
    if (node == parent) return true;
  }

  return false;
};
